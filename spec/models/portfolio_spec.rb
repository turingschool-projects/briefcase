require 'rails_helper'

RSpec.describe Portfolio do
  context "validations" do
    it { should validate_presence_of(:full_name) }
    it { should validate_presence_of(:github_url) }
    it { should validate_presence_of(:linkedin_url) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:bio) }
  end

  context "methods" do
    it "set_slug" do
      user = User.create(first_name: "Steve", last_name: "Jobs")
      expect(user.slug).to eq("steve-jobs")
    end

    it "self.avatar_urls" do
      user = new_user
      avatar = File.new(Rails.root + 'app/assets/images/turing-show-banner.jpg')
      user.portfolio = create(:portfolio, user: user, avatar: avatar)

      url = user.portfolio.avatar.url
      urls = Portfolio.avatar_urls
      expected = { user.portfolio.id => url }

      expect(urls).to eq(expected)
    end

    it "self.markdown_bios" do
      user = new_user
      user.portfolio = create(:portfolio, user: user, bio: "``` ruby\ntest = \"test\"\n```")

      bio = "<pre><code class=\"ruby\">test = &quot;test&quot;\n</code></pre>\n"
      bios = Portfolio.markdown_bios
      expected = { user.portfolio.id => bio}

      expect(bios).to eq(expected)
    end

    it "self.locations" do
      user = new_user
      user.portfolio = create(:portfolio, user: user)
      user.portfolio.locations.create(city: "City1", state: "State1")
      user.portfolio.locations.create(city: "City2", state: "State2")

      locations = Portfolio.locations
      expected = {user.portfolio.id => user.portfolio.locations}

      expect(locations).to eq(expected)
    end

    it "project_avatar_urls" do
      user = new_user
      portfolio = create(:portfolio, user: user)
      project = create(:project, portfolio: portfolio, user: user)

      urls = portfolio.project_avatar_urls
      expected = {project.id => project.avatar.url}

      expect(urls).to eq(expected)
    end

    it "create_locations" do
      user = new_user
      portfolio = create(:portfolio, user: user)
      checked_locations = ["City1,State1", "City2,State2"]

      locations = portfolio.create_locations(checked_locations)

      expect(portfolio.locations.count).to eq(2)
    end
  end
  
  context "relationships" do
    it "has many projects" do
      portfolio = Portfolio.new(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")

      expect(portfolio).to respond_to(:projects)
    end

    it "belongs to a user" do
      portfolio = Portfolio.new(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")

      expect(portfolio).to respond_to(:user)
    end
  end
end

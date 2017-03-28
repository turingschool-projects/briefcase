require 'rails_helper'

RSpec.describe Portfolio, js:true  do
  context 'as a new logged in user' do
    it "can create a new portfolio" do
      user = new_user

      visit dashboard_path

      click_link 'Create Profile'

      expect(current_path).to eq(new_user_portfolio_path(user.id))

      fill_in 'name', with: "Jimmy"
      fill_in 'title', with: "Software developer"
      fill_in 'bio', with: "Sup"
      fill_in 'email', with: "www.test.com"
      fill_in 'github', with: "www.test.com"
      fill_in 'linkedin', with: "www.test.com"

      click_on 'Save Profile'
      sleep(1)

      expect(current_path).to eq(dashboard_path)
      expect(user.portfolio.full_name).to eq("Jimmy")
      expect(user.portfolio.title).to eq("Software developer")
      expect(user.portfolio.bio).to eq("Sup")
      expect(user.portfolio.email).to eq("www.test.com")
      expect(user.portfolio.github_url).to eq("www.test.com")
      expect(user.portfolio.linkedin_url).to eq("www.test.com")
    end
  end

  context 'validations' do
    it "requires a name" do
      user = new_user

      visit dashboard_path

      click_link 'Create Profile'

      fill_in 'title', with: "Software developer"
      fill_in 'bio', with: "Sup"
      fill_in 'email', with: "www.test.com"
      fill_in 'github', with: "www.test.com"
      fill_in 'linkedin', with: "www.test.com"

      click_on 'Save Profile'
      sleep(1)

      expect(current_path).to eq(new_user_portfolio_path(user.id))
      expect(user.portfolio).to eq(nil)
    end

    it "requires a title" do
      user = new_user

      visit dashboard_path

      click_link 'Create Profile'

      fill_in 'name', with: "Jimmy"
      fill_in 'bio', with: "Sup"
      fill_in 'email', with: "www.test.com"
      fill_in 'github', with: "www.test.com"
      fill_in 'linkedin', with: "www.test.com"

      click_on 'Save Profile'
      sleep(1)

      expect(current_path).to eq(new_user_portfolio_path(user.id))
      expect(user.portfolio).to eq(nil)
    end

    it "requires a bio" do
      user = new_user

      visit dashboard_path

      click_link 'Create Profile'

      fill_in 'name', with: "Jimmy"
      fill_in 'title', with: "Developer"
      fill_in 'email', with: "www.test.com"
      fill_in 'github', with: "www.test.com"
      fill_in 'linkedin', with: "www.test.com"

      click_on 'Save Profile'
      sleep(1)

      expect(current_path).to eq(new_user_portfolio_path(user.id))
      expect(user.portfolio).to eq(nil)
    end

    it "requires an email" do
      user = new_user

      visit dashboard_path

      click_link 'Create Profile'

      fill_in 'name', with: "Jimmy"
      fill_in 'title', with: "Developer"
      fill_in 'bio', with: "www.test.com"

      click_on 'Save Profile'
      sleep(1)

      expect(current_path).to eq(new_user_portfolio_path(user.id))
      expect(user.portfolio).to eq(nil)
    end
  end
end

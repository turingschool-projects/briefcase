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

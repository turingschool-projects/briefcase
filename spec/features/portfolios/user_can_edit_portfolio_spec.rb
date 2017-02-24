require 'rails_helper'

RSpec.describe Portfolio, js:true do
  context 'as a new logged in user' do
    it "can edit an existing portfolio" do
      user = new_user
      portfolio = user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
      visit dashboard_path

      click_link 'Edit'

      expect(current_path).to eq(user_portfolio_edit_path(user.id))

      fill_in :name, with: "John"
      fill_in :title, with: "Engineer"
      fill_in :bio, with: "Edited Bio"

      click_on 'Save Profile'
      sleep(1)

      portfolio = Portfolio.first
      expect(portfolio.full_name).to eq("John")
      expect(portfolio.title).to eq("Engineer")
      expect(portfolio.bio).to eq("Edited Bio")
    end
  end
end

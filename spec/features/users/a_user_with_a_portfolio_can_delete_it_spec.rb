require 'rails_helper'

describe 'as a user with a portfolio', js:true do
  context 'when I click delete portfolio' do
    it 'I will no longer have a portfolio' do

      user = new_user
      portfolio = user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")

      visit dashboard_path

      click_on "Delete"

      expect(page).to have_content("Are you sure you want to delete Anthony Ciccone?")

      find(".delete").trigger("click")
      sleep(1)

      expect(Portfolio.all.count).to eq(0)
    end
  end
end

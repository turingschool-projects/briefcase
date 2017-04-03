require 'rails_helper'

RSpec.describe Portfolio, js:true do
  before(:each) do
    @user = new_user
    portfolio = @user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
    visit dashboard_path
  end

  context 'as a new logged in user' do
    it "can edit an existing portfolio" do
      click_link 'Edit'

      expect(current_path).to eq(edit_user_portfolio_path(@user.id))

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

  context 'validations' do
    it 'requires a name' do
      click_link 'Edit'

      expect(current_path).to eq(edit_user_portfolio_path(@user.id))

      fill_in :name, with: ""
      fill_in :title, with: "Engineer"
      fill_in :bio, with: "Edited Bio"

      click_on 'Save Profile'
      sleep(1)

      expect(current_path).to eq(edit_user_portfolio_path(@user.id))
      save_and_open_page
      expect(page).to have_content("Missing require field")

    end
  end
end

require 'rails_helper'

RSpec.describe Portfolio, js:true do
  context 'as a new logged in user' do
    xit "can edit an existing portfolio" do
      user = new_user
      portfolio = create(:portfolio, user: user)

      visit dashboard_path

      click_link 'Edit'

      expect(current_path).to eq(user_portfolio_edit_path(user.id))

      fill_in 'name', with: "Steve"
      fill_in 'title', with: "Designer"
      fill_in 'bio', with: "Thanks"

      click_on 'Save Profile'
      sleep(1)

      expect(current_path).to eq(dashboard_path)
      expect(user.portfolio.full_name).to eq("Steve")
      expect(user.portfolio.title).to eq("Designer")
      expect(user.portfolio.bio).to eq("Tnanks")
    end
  end
end

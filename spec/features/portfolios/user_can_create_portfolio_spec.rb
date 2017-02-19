require 'rails_helper'

RSpec.describe Portfolio do
  context 'as a new logged in user' do
    it "can create a new portfolio"do

      user = create(:user)
      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

      visit dashboard_path

      click_link 'Create Profile'

      expect(current_path).to eq(user_portfolio_new_path(user.id))

      fill_in 'name', with: "Jimmy"
      fill_in 'title', with: "Software developer"

      click_link('portfolio-new-submit')
      save_and_open_page

      expect(current_path).to eq(dashboard_path)
    end
  end
end

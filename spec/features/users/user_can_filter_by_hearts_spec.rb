require 'rails_helper'

describe 'as a guest', js:true do
  context 'I can view alumni' do
    it 'and filter by hearts' do
      user = new_user
      user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about my project here")

      visit alumni_index_path

      expect(page).to have_content("Anthony Ciccone")
      expect(page).to have_content("software developer")
      expect(page).to have_content("about my project here")

      find("#by-heart").trigger("click")

      expect(page).to_not have_content("Anthony Ciccone")
    end
  end
end

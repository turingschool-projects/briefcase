require 'rails_helper'

describe 'as a user', js:true do
  context 'I can visit alumni index' do
    it 'and view a alumnis profile to see relevant info' do

      user = new_user
      portfolio = user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
      user.projects.create(github: "github.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City", areas_of_focus: "ruby")

      visit alumni_index_path

      
      click_on "View Profile"
      sleep(10)
      save_and_open_page

      expect(page).to have_content("Anthony Ciccone")
      expect(page).to have_content("software developer")
      expect(page).to have_content("about myself here")
      expect(page).to have_content("Jam City")
      expect(page).to have_content("ruby")
      expect(page).to have_content("about my project here")
    end
  end
end

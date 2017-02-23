require 'rails_helper'

describe 'as a user', js:true do
  context 'when I visit alumni page' do
    it 'I can use the search bar to narrow my results' do

      user = new_user
      portfolio = user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")

      user2 = new_user
      portfolio2 =  user2.create_portfolio(linkedin_url: "linkedin.com", full_name: "John Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")

      visit alumni_index_path

      find(".Search-box").set("John")

      expect(page).to have_content("John Ciccone")
      expect(page).to_not have_content("Anthony Ciccone")
    end
  end
end

require 'rails_helper'

describe 'as a user', js:true do
  context 'I can visit alumni index' do
    it 'and sort alumni' do

      user = new_user

      portfolio = user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Ant Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
      user.projects.create(github: "github.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City", areas_of_focus: "ruby")

      user2 = new_user
      portfolio2 =  user2.create_portfolio(linkedin_url: "linkedin.com", full_name: "John Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")

      visit alumni_index_path

      within first(".card") do
        expect(page).to have_content("Ant Ciccone")
      end

      find(".a-z-btn").trigger("click")

      within first(".card") do
        expect(page).to have_content("John Ciccone")
      end
    end
  end
end

require 'rails_helper'

describe 'as a user', js:true do
  context 'when I have three projects' do
    it 'I can no longer create a new project' do

      user = new_user
      portfolio = user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
      user.projects.create(github: "github.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City", areas_of_focus: "ruby")
      user.projects.create(github: "github1.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City2", areas_of_focus: "ruby")
      user.projects.create(github: "github2.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City3", areas_of_focus: "ruby")

      visit dashboard_path

      expect(page).to have_content("Jam City")
      expect(page).to have_content("Jam City2")
      expect(page).to have_content("Jam City3")
      expect(page).to have_content("You have reached your limit of projects")
    end
  end
end

require 'rails_helper'

describe 'as a user', js:true do
  context 'I can visit alumni index' do
    it 'and view a alumnis profile to see relevant info' do
      user = new_user
      portfolio = user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
      user.projects.create(github: "github.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City", areas_of_focus: "ruby", published: true)

      visit alumni_index_path

      click_on "View Profile"

      expect(page).to have_content("Anthony Ciccone")
      expect(page).to have_content("software developer")
      expect(page).to have_content("about myself here")
      expect(page).to have_content("Jam City")
      expect(page).to have_content("ruby")
      expect(page).to have_content("about my project here")
    end
  end

  it 'only published projects will show up on alumnis page' do
      user = new_user
      
      portfolio = user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
      
      user.projects.create(github: "github.com/published", description: "published project", portfolio_id: portfolio.id, name: "Published Title", areas_of_focus: "ruby", published: true)
      user.projects.create(github: "github.com/draft", description: "draft project", portfolio_id: portfolio.id, name: 'Draft Title', areas_of_focus: "JavaScript", published: false)

      visit alumni_path(user.slug)
      
      expect(page).to have_content("Published Title")
      expect(page).to have_content("published project")
      expect(page).to have_content("ruby")
      expect(page).to_not have_content("Draft Title")
      expect(page).to_not have_content("draft project")
      expect(page).to_not have_content("JavaScript")
    end


end

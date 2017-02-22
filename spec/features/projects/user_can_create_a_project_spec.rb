require 'rails_helper'

describe 'as a user', js:true do

  context 'when I create a portfolio' do
    it 'I can then create a project' do
      user = new_user

      user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "test", bio: "software develooer")

      visit dashboard_path

      click_on "Create New Project"

      expect(current_path).to eq(user_project_new_path(user.id))

      fill_in 'project-name', with: "Jam City"
      fill_in 'github', with: "github.com"
      fill_in 'description', with: "best project"

      find(".project-save").trigger("click")
      sleep(1)
      
      expect(current_path).to eq(dashboard_path)
      expect(user.projects.count).to eq(1)
    end
  end
end

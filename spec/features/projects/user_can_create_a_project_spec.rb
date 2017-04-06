require 'rails_helper'

describe 'as a user', js:true do
  before(:each) do
    @user = new_user

    @user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "project@github.com", email: "test@test.com", title: "test", bio: "software develooer")
  end

  context 'when I create a portfolio' do
    it 'I can then create and PUBLISH a project' do
      visit dashboard_path

      click_on "Create New Project"

      expect(current_path).to eq(new_user_project_path(@user.id))

      fill_in 'project-name', with: "Jam City"
      fill_in 'github', with: "updated-project@github.com"
      fill_in 'description', with: "best project"

      find(".project-save").trigger("click")
      sleep(1)

      expect(current_path).to eq(dashboard_path)
      expect(@user.projects.count).to eq(1)
    end

    it 'I can then create and SAVE AS DRAFT a project' do
      visit dashboard_path

      click_on "Create New Project"

      expect(current_path).to eq(new_user_project_path(@user.id))

      fill_in 'project-name', with: "Jam City"
      fill_in 'github', with: "updated-project@github.com"
      fill_in 'description', with: "best project"

      find(".project-draft").trigger("click")
      sleep(1)

      expect(current_path).to eq(dashboard_path)
      expect(@user.projects.count).to eq(1)
      expect(@user.projects.first.published).to eq(false)
      within('.projects-draft') do
        expect(page).to have_content("Jam City")
      end
    end

  end

  context 'validations' do
    it 'requires a name' do
      visit dashboard_path

      click_on "Create New Project"

      expect(current_path).to eq(new_user_project_path(@user.id))

      fill_in 'project-name', with: ""
      fill_in 'github', with: "updated-project@github.com"
      fill_in 'description', with: "best project"

      find(".project-save").trigger("click")
      sleep(1)

      expect(current_path).to eq(new_user_project_path(@user.id))
      expect(page).to have_content("Error: Missing required fields!")
      expect(@user.projects.count).to eq(0)
    end

    it 'requires a github url' do
      visit dashboard_path

      click_on "Create New Project"

      expect(current_path).to eq(new_user_project_path(@user.id))

      fill_in 'project-name', with: "Jam City"
      fill_in 'description', with: "best project"

      find(".project-save").trigger("click")
      sleep(1)

      expect(current_path).to eq(new_user_project_path(@user.id))
      expect(page).to have_content("Error: Missing required fields!")
      expect(@user.projects.count).to eq(0)
    end

    it 'requires a description' do
      visit dashboard_path

      click_on "Create New Project"

      expect(current_path).to eq(new_user_project_path(@user.id))

      fill_in 'project-name', with: "Jam City"
      fill_in 'github', with: "updated-project@github.com"

      find(".project-save").trigger("click")
      sleep(1)

      expect(current_path).to eq(new_user_project_path(@user.id))
      expect(page).to have_content("Error: Missing required fields!")
      expect(@user.projects.count).to eq(0)
    end
  end
end

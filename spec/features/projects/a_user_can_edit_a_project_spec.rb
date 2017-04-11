require 'rails_helper'


describe "As a user", js:true do
  context "when I click on edit a project" do
    it "I can edit the project fields AND PUBLISH IT" do

      user = new_user
      portfolio = user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
      user.projects.create(github: "github.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City", areas_of_focus: "ruby")

      visit "users/#{user.id}/project/edit?project=1"

      find("#project-name").set("Edit project Name worked :)")

      find(".project-save").trigger("click")
      sleep(1)

      expect(current_path).to eq(dashboard_path)
      expect(user.portfolio.projects.first.published).to eq(true)
      expect(page).to have_content("Edit project Name worked :)")
    end
  end

  context "when I click on edit a project" do
    it "I can edit the project fields AND SAVE AS DRAFT" do

      user = new_user
      portfolio = user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
      user.projects.create(github: "github.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City", areas_of_focus: "ruby")

      visit "users/#{user.id}/project/edit?project=1"

      find("#project-name").set("Edit project Name worked :)")

      find(".project-draft").trigger("click")
      sleep(1)

      expect(current_path).to eq(dashboard_path)
      expect(user.portfolio.projects.first.published).to eq(false)      
      # within('.projects-draft') do
        expect(page).to have_content("Edit project Name worked :)")
      # end
    end
  end

end

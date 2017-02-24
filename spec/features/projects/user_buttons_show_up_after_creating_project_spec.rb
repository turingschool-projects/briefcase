require 'rails_helper'

RSpec.describe Portfolio, js:true  do
  context 'Before I create a project' do 
    it "I do not see the buttons for view edit and delete" do
      user = new_user
      create :portfolio, user: user

      visit dashboard_path

      within(:css, ".dashboard-project") do 
        expect(page).to have_link('Create New Project')
        expect(page).to_not have_content('Edit')
        expect(page).to_not have_content('Delete')
      end 
    end
  end

  context "After I create a project" do
    it "see the buttons for view edit and delete" do 
      user = new_user
      portfolio = create :portfolio, user: user
      user.projects.create(github: "github.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City", areas_of_focus: "ruby")

      visit dashboard_path

      within(:css, ".dashboard-project") do 
        expect(page).to_not have_link('Create New Project')
        expect(page).to have_content('Edit')
        expect(page).to have_content('Delete')
      end 
    end
  end
end
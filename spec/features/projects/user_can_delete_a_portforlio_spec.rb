require 'rails_helper'

RSpec.describe Portfolio, js:true  do
  context 'After a portforlio is created' do 
    xit "I can delete the portfolio" do
      user = new_user
      portfolio = create :portfolio, user: user
      project = user.projects.create(github: "github.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City", areas_of_focus: "ruby")

      visit dashboard_path

      within(:css, ".dashboard-project") do
        expect(page).to_not have_link('Create New Project')
        expect(page).to have_content('Edit')
        expect(page).to have_content('Delete')
      end 

      within(:css, ".dashboard-project") do
        find('.delete').trigger("click")
        sleep(1)
      end 

      expect(current_path).to eq(dashboard_path)
      within(:css, ".dashboard-project") do
        expect(page).to have_link('Create New Project')
        expect(page).to_not have_content('Edit')
        expect(page).to_not have_content('Delete')
      end 
    end
  end
end
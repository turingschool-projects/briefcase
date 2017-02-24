require 'rails_helper'

RSpec.describe Portfolio, js:true  do
  context 'Before I create a profile' do
    it "I do not see the button to create a project" do
      user = new_user

      visit dashboard_path

      expect(page).to have_link('Create Profile')
      expect(page).to_not have_link('Create New Project')
    end

    it "I do not see the buttons for view edit and delete" do
      user = new_user

      visit dashboard_path

      expect(page).to_not have_content('View')
      expect(page).to_not have_content('Edit')
      expect(page).to_not have_content('Delete') 
    end
  end

  context "After I create a profile" do
    it "can see the button to create a projects" do 
      user = new_user
      create :portfolio, user: user
      
      visit dashboard_path

      expect(page).to_not have_link('Create Profile')
      expect(page).to have_link('Create New Project')
    end

    it "I do not see the buttons for view edit and delete" do
      user = new_user
      create :portfolio, user: user

      visit dashboard_path

      expect(page).to have_content('View')
      expect(page).to have_content('Edit')
      expect(page).to have_content('Delete') 
    end
  end
end

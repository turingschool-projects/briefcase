require 'rails_helper'

RSpec.describe 'Navbar', js:true  do
  context 'when not signed in' do
    it "has correct links " do

      visit '/'

      expect(page).to have_link('The Difference')
      expect(page).to have_link('Our Team')
      expect(page).to have_link('Programs')
      expect(page).to have_link('Admission')
      expect(page).to have_link('Tuition')
      expect(page).to have_link('Blog')
      expect(page).to have_link('Contact')
      expect(page).to have_link('Alumni')
    end

    it "routes to correct page when clicked on Main Menu" do
      visit '/'

      within first('ul.menu') do
        expect(page).to have_link('The Difference')
        expect(page).to have_link('Our Team')
        expect(page).to have_link('Programs')
        expect(page).to have_link('Admission')
        expect(page).to have_link('Tuition')
        expect(page).to have_link('Blog')
        expect(page).to have_link('Contact')
        expect(page).to have_link('Alumni')
      end
    end
  end

  context 'when signed in' do
    it "has correct links and routes " do
      user = new_user
      visit '/'

      click_on('Dashboard')
      expect(current_path).to eq('/dashboard')

      visit '/'

      click_on('Sign Out')
      expect(current_path).to eq('/')
    end
  end
end

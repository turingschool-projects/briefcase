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

    it "routes to correct page when clicked" do

      visit '/'

      click_on('The Difference')
      expect(current_path).to eq('/turing-difference')

            visit '/'

      click_on('Our Team')
      expect(current_path).to eq('/our-team')

            visit '/'

      click_on('Programs')
      expect(current_path).to eq('/programs')

            visit '/'

      click_on('Admission')
      expect(current_path).to eq('/admissions')

            visit '/'

      click_on('Tuition')
      expect(current_path).to eq('/tuition')

            visit '/'

      click_on('Blog')
      expect(current_path).to eq('/blog')

            visit '/'

      click_on('Contact')
      expect(current_path).to eq('/contact')

            visit '/'

      click_on('Alumni')
      expect(current_path).to eq('/alumni')
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

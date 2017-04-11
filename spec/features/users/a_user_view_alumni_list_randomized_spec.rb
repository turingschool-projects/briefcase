require 'rails_helper'

describe 'As a user', js:true do
  context 'I can visit alumni index' do
    xit 'will show a randomized list of portfolios' do
      user = new_user

      portfolio = user.create_portfolio!(linkedin_url: "linkedin.com", full_name: "Test User One", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
      user.projects.create(github: "github.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City", areas_of_focus: "ruby")

      user2 = new_user
      # portfolio2 =  user2.create_portfolio!(linkedin_url: "linkedin.com", full_name: "Test User Two", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
      user2.portfolio =  Portfolio.create(linkedin_url: "linkedin.com", full_name: "Test User Two", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")

      user3 = new_user
      user3.portfolio = Portfolio.create(linkedin_url: "linkedin.com", full_name: "Test User Three", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")

      visit alumni_index_path

      within first('.card') do
        title = find('span.card-title:nth-of-type(1)').text
      end

      visit alumni_index_path

      sleep(5)
      within first('.card') do
        title2 = find('span.card-title:nth-of-type(1)').text
      end

      expect(title).not_to eq(title2)
    end
  end
end
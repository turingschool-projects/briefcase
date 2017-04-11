require 'rails_helper'

describe 'As a user', js:true do
  context 'I can visit alumni index' do
    it 'will show a randomized list of portfolios' do
      user = new_user

      portfolio = user.create_portfolio(linkedin_url: "linkedin.com", full_name: "Test User One", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")
      user.projects.create(github: "github.com", description: "about my project here", portfolio_id: portfolio.id, name: "Jam City", areas_of_focus: "ruby")

      user2 = new_user
      portfolio2 =  user2.create_portfolio(linkedin_url: "linkedin.com", full_name: "Test User Two", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")

      user3 = new_user
      portfolio2 =  user2.create_portfolio(linkedin_url: "linkedin.com", full_name: "Test User Three", github_url: "github.com", email: "test@test.com", title: "software developer", bio: "about myself here")

      try_counter = 0
      match? = true

      while try_counter < 3 && match? do
        visit alumni_index_path

        within('.card:nth-of-type(1)') do
          within('.card-content') do
            within('.card-title:nth-of-type(1)') do
              # match_counter += 1 if 
            end
          end
        end
      end
      expect(match?).to be_falsy
    end
  end
end
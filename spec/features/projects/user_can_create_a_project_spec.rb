require 'rails_helper'

describe 'as a user' do
  context 'when I create a portfolio' do
    it 'I can then create a project' do
      user = new_user

      user.portfolio.create(full_name: "Anthony Ciccone", github_url: "github.com", email: "test@test.com", title: "test", bio: "software develooer")
      
    end
  end
end

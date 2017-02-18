require 'rails_helper'

RSpec.describe User do
  context 'relationships' do
    it 'a user has many projects' do
      user = User.new(first_name: 'anthony')

      expect(user).to respond_to(:projects)
    end
  
    it 'a user has a portfolio' do
      user = User.new(first_name: 'daniel')

      expect(user).to respond_to(:portfolio)
    end


  end

end

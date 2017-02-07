require 'rails_helper'

RSpec.describe User do
  context 'relationships' do
    it 'a user has a project' do
      user = User.new(first_name: 'daniel')

      expect(user).to respond_to(:portfolio)
    end
  end
end

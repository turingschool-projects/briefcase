require 'rails_helper'

RSpec.describe User do
  context 'relationships' do
    it 'a project belongs to a user' do
      user = Project.new(name: 'Turing project')

      expect(user).to respond_to(:user)
    end
  end
end

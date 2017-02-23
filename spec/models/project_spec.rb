require 'rails_helper'

RSpec.describe Project do
  context 'relationships' do
    it 'a project belongs to a user' do
      project = Project.new(name: 'Turing project')

      expect(project).to respond_to(:user)
    end
  end

  context 'validations' do
    it 'a project is invalid with out a name' do
      project = Project.new(github: 'Turingproject.github')

      expect(project).to be_invalid
    end

    it 'a project is invalid with out a github link' do
      project = Project.new(name: 'Jam-City')

      expect(project).to be_invalid
    end
  end

  context "methods" do
    it "self.distinct_city_states" do
      Location.create(city: "Denver", state: "Colorado")
      Location.create(city: "Denver", state: "Colorado")

      locations = Location.distinct_city_states
      expect(locations).to eq("")
    end
  end

  it { should validate_presence_of(:github) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) }

end

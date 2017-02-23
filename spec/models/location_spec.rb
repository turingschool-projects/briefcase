require 'rails_helper'

RSpec.describe Location do
  context "methods" do
    it "self.distinct_city_states" do
      Location.create(city: "Denver", state: "Colorado")
      Location.create(city: "Denver", state: "Colorado")

      locations = Location.distinct_city_states

      expect(locations.first.city).to eq("Denver")
      expect(locations.first.state).to eq("Colorado")
      expect(locations.to_a.count).to eq(1)
    end
  end

end

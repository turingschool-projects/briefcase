class Location < ApplicationRecord
  belongs_to :portfolio, optional: true

  def self.distinct_city_states
    Location.select("state, city").distinct.order(:state, :city)
  end
end

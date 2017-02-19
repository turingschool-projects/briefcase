class Location < ApplicationRecord
  belongs_to :portfolio, optional: true
end

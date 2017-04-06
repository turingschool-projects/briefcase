class PastExperience < ApplicationRecord
  validates :experience, presence: true, uniqueness: true
  has_many :portfolio_past_experiences
  has_many :portfolios, through: :portfolio_past_experiences
end

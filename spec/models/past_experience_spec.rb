require 'rails_helper'

RSpec.describe PastExperience do
  context "validations" do
    it { should validate_presence_of(:experience) }
    it { should validate_uniqueness_of(:experience) }
  end

  context "relationships" do
    it { is_expected.to have_many :portfolios }
    it { is_expected.to have_many :portfolio_past_experiences }
  end
end

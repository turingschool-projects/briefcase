require 'rails_helper'

RSpec.describe PortfolioPastExperience do
  context "relationships" do
    it { is_expected.to belong_to :portfolio }
    it { is_expected.to belong_to :past_experience }
  end
end

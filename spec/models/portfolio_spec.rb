require 'rails_helper'

RSpec.describe Portfolio do
  it { should validate_presence_of(:full_name) }
  it { should validate_presence_of(:github_url) }
  it { should validate_presence_of(:linkedin_url) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:bio) }
end

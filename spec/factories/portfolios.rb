FactoryGirl.define do
  factory :portfolio do
    full_name "John Doe"
    title "Software Developer"
    github_url 'github.com'
    linkedin_url 'linkedin.com'
    email 'github.com'
    bio 'I like cars'
    user
  end
end

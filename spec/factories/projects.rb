FactoryGirl.define do
  factory :project do
    name "Briefcase"
    github "www.github.com"
    production_url 'www.github.com'
    description 'Briefcase'
    areas_of_focus 'React'
    portfolio
    user
  end
end

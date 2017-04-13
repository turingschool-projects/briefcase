require 'csv'

def start
  puts 'Start seeding database...'
  create_user
  create_portfolio
  puts 'Finished seeding database...'
end


def cohort
  ["1406", "1407", "1408", "1409", "1410", "1412", "1502", "1503", "1505", "1507", "1508", "1510", "1511", "1602", "1603", "1605", "1606", "1608", "1610", "1611"].sample
end

def create_previous_experience
  ["Accounting", "Book Keeping", "Payroll Services", "Law", "Medical", "Customer Service", "Business", "Marketing", "Communications", "Management" ].sample
end

def create_user
  200.times do
    user = User.create!(
    first_name:       Faker::Name.first_name,
    last_name:        Faker::Name.last_name,
    email:            Faker::Internet.free_email,
    cohort:           cohort
    )
  end
end

def add_locations
  locations = Location.all
  location = locations.sample
end

def clean_users
  puts 'Emptying User table...'
  User.delete_all
end


def create_portfolio
  clean_users
  users = User.all
  users.each do |user|
    user.portfolio = Portfolio.new(
    email:                  user.email,
    cohort:                 user.cohort,
    github_url:             "#{user.first_name}.#{user.last_name}#{rand(0..100)}",
    bio:                    Faker::Hipster.paragraph,
    linkedin_url:           "#{user.first_name}.#{user.last_name}",
    full_name:              "#{user.first_name} #{user.last_name}",
    previous_experience:    create_previous_experience,
    published:              true,
    title:                  "Software Developer",
    )
    user.portfolio.locations << add_locations
    user.portfolio.save
  end
end

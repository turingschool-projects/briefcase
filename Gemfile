source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'
gem 'best_in_place', '~> 3.0.1'
gem 'turbolinks', '~> 5.0.0'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'rb-readline'
gem 'figaro'
gem 'serializer'
gem 'faraday'
gem 'faker'
gem 'react-rails'
gem 'omniauth-oauth2'
gem 'omniauth-census', git: "https://github.com/turingschool-projects/omniauth-census.git"
gem 'thin'
gem 'axios_rails', '~> 0.7.0'
gem "responders"
gem 'paperclip'
gem 'aws-sdk', '~> 2.3'
gem 'travis'
gem 'redcarpet'


group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'pry'
  gem 'launchy'
  gem 'rspec-rails'
  gem 'capybara'
  gem 'factory_girl_rails'
  gem 'simplecov'
  gem 'database_cleaner'
  gem 'selenium-webdriver'
end

group :test do
  gem 'vcr'
  #for testing our api's - avoid hitting rate limits
  gem 'webmock'
  #used in conjuction with vcr to intercept out web calls
  gem 'shoulda-matchers'
  gem 'poltergeist'
  gem 'phantomjs', :require => 'phantomjs/poltergeist'
end

  group :development do
    # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
    gem 'web-console'
    gem 'listen', '~> 3.0.5'
  end

  # Windows does not include zoneinfo files, so bundle the tzinfo-data gem
  gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

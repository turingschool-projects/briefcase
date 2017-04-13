# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

namespace :db do
  namespace :seed do
    require_relative 'db/test_user'
    desc "Seed database with test User and test Portfolio information"
    task :test_user => :environment do
      start
    end
  end
end

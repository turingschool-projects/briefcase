# config/initializers/omniauth.rb

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :census, ENV['census_id'], ENV['census_secret'],
  {name: "census"}
end

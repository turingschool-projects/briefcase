Rails.application.routes.draw do
  root 'users#index', as: 'home'
  get '/dashboard', to: 'dashboard#index'
  resources :users
end

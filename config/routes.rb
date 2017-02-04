Rails.application.routes.draw do

  get  'auth/:provider/callback',    to: 'sessions#create'
  get  'sign_in_with_census',    to: 'sessions#new'
  root 'users#index'
  get '/logout', to: 'sessions#destroy'

  get '/dashboard', to: 'dashboard#index'
  resources :users, only: [:index, :edit, :update, :show]
  get '/user/1/edit-account', to: 'users#account'

  namespace :admin do
    resources :users, only: [:index, :create, :destroy]
  end
end

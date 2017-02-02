Rails.application.routes.draw do
  root 'users#index', as: 'home'
  get '/dashboard', to: 'dashboard#index'
  resources :users, only: [:index, :edit, :update]

  namespace :admin do
    resources :users, only: [:index, :create, :destroy]
  end
end

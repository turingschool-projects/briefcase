Rails.application.routes.draw do

  get  'auth/:provider/callback',    to: 'sessions#create'
  get  'sign_in_with_census',    to: 'sessions#new'
  get '/', to: redirect('/alumni')
  get '/logout', to: 'sessions#destroy'

  get '/dashboard', to: 'dashboard#index'
  resources :users, only: [:index, :edit, :update, :show], param: :slug, path: 'alumni'
  get '/user/1/edit-account', to: 'users#account'

end

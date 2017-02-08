Rails.application.routes.draw do

  get  'auth/:provider/callback',    to: 'sessions#create'
  get  'sign_in_with_census',    to: 'sessions#new'
  get '/', to: redirect('/alumni')
  get '/logout', to: 'sessions#destroy'
  get '/dashboard', to: 'dashboard#index'

  resources :users, only: [:index, :edit, :update, :show], param: :slug, path: 'alumni' do
    get "portfolio", to: "users/portfolios#show"
    get "portfolio/new", to: "users/portfolios#new"
    get "portfolio/edit", to: "users/portfolios#edit"
    put "portfolio", to: "users/portfolios#update"
    post "portfolio", to: "users/portfolios#create"
    delete "portfolio", to: "users/portfolios#destroy"
    get "portfolio/delete", to: "users/portfolios#delete"
    get "project/new", to: "users/projects#new"
  end

  get '/user/1/edit-account', to: 'users#account'

end

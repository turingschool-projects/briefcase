Rails.application.routes.draw do

  get  'auth/:provider/callback',    to: 'sessions#create'
  get  'sign_in_with_census',    to: 'sessions#new'
  get '/logout', to: 'sessions#destroy'
  get '/', to: "alumni#index"

  resources :alumni, only: [:index, :show], param: :slug

  resources :users, only: [:edit, :update] do
    get 'edit-account', to: 'users#account'
    get "portfolio", to: "users/portfolios#show"
    get "portfolio/edit", to: "users/portfolios#edit"
    put "portfolio", to: "users/portfolios#update"
    delete "portfolio", to: "users/portfolios#destroy"
    get "portfolio/delete", to: "users/portfolios#delete"
    resources :portfolio, :controller => "users/portfolios", only: [:new, :create]
    get "project/new", to: "users/projects#new"
    post "project", to: "users/projects#create"
    delete "project", to: "users/projects#destroy"
    get "project/edit", to: "users/projects#edit"
    put "project", to: "users/projects#update"
  end

  get '/dashboard', to: "dashboard#index" #technically the dashboard

end

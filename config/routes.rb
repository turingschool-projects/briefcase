Rails.application.routes.draw do

  get  'auth/:provider/callback',    to: 'sessions#create'
  get  'sign_in_with_census',    to: 'sessions#new'
  get '/logout', to: 'sessions#destroy'
  get '/', to: "alumni#index"

  resources :alumni, only: [:index, :show], param: :slug

  resources :users, only: [:edit, :update] do
    get 'edit-account', to: 'users#account'
    get "portfolio", to: "users/portfolios#show"
    delete "portfolio", to: "users/portfolios#destroy"
    get "portfolio/delete", to: "users/portfolios#delete"
    resource :portfolio, :controller => "users/portfolios", only: [:new, :create, :edit, :update]
    resources :project, :controller => "users/projects", only: [:new, :create]
    delete "project", to: "users/projects#destroy"
    get "project/edit", to: "users/projects#edit"
    put "project", to: "users/projects#update"
  end

  get '/dashboard', to: "dashboard#index" #technically the dashboard

end

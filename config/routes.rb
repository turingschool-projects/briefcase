Rails.application.routes.draw do

  get  'auth/:provider/callback',    to: 'sessions#create'
  get  'sign_in_with_census',    to: 'sessions#new'
  get '/logout', to: 'sessions#destroy'
  get '/', to: "alumni#index"

  resources :alumni, only: [:index, :show], param: :slug

  resources :users, only: [:edit, :update] do
    get 'edit-account', to: 'users#account'
    resource :portfolio, :controller => "users/portfolios" do
      get '/delete', to: "users/portfolios#delete"
    end
    resource :project, :controller => "users/projects", only: [:new, :create, :edit, :update, :destroy]
  end

  get '/dashboard', to: "dashboard#index" #technically the dashboard

end

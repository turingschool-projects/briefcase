class UsersController < ApplicationController
  def index
    @users = User.all
    if(logged_in?)
      render component: 'Main', props: { users: @users, signed_in: 1 }
    else
      render component: 'Main', props: { users: @users, signed_in: 0 }
    end
  end

  def show
    @user = User.find(params[:id])
    render component: "Show", props: { user: @user, projects: @user.projects }
  end

  def edit
    @user = User.find(params[:id])
    render component: "Edit", props: { user: @user }
  end

  def account
    render component: 'Account'
  end
end

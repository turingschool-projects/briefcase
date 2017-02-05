class UsersController < ApplicationController
  def index
    @users = User.all
    render component: 'Main', props: { users: @users, signed_in: 0 }
  end

  def show
    @user = User.find(params[:id])
    render component: "Show", props: { user: @user, projects: @user.projects }
  end

  def edit
    @user = User.find(params[:id])
    render component: "Edit", props: { user: @user }
  end

end

class UsersController < ApplicationController
  def index
    @users = User.all
    # render component: 'Main', props: { users: @users }
  end

  def edit
    @user = User.find(params[:id])
    render component: "Edit", props: { user: @user }
  end

end

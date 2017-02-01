class UsersController < ApplicationController
  def index
    @users = User.all
    render component: 'Main', props: { users: @users, newUserPath: new_user_path }, class: "main"
  end
end

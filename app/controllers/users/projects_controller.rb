class Users::ProjectsController < ApplicationController

  def new
    @user = current_user
  end
end

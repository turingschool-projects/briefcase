class DashboardController < ApplicationController
  def index
    if (logged_in?)
      if(current_user.portfolio)
        @user = UserPresenter.new(current_user)
        @projects = @user.projects
        @project_avatars = Project.avatar_urls(current_user)
      else
        @projects = []
      end
    else
      redirect_to root_path
    end
  end
end

class DashboardController < ApplicationController
  def index
    if (logged_in?)
      if(current_user.portfolio)
        @projects = current_user.portfolio.projects
        @avatar = current_user.portfolio.avatar.url
        @project_avatars = Project.avatar_urls(current_user)
      else
        @projects = []
      end
    else
      redirect_to root_path
    end
  end
end

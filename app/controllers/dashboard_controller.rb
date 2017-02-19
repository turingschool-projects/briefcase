class DashboardController < ApplicationController
  def index
    if (current_user)
      if(current_user.portfolio)
        @projects = current_user.portfolio.projects
        @avatar = current_user.portfolio.avatar.url
        @project_avatars = Project.avatar_urls(current_user)
      else
        @projects = []
      end
    end
  end
end

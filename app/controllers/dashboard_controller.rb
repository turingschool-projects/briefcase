class DashboardController < ApplicationController
  def index
    if (logged_in?)
      if(current_user.portfolio)
        @user = current_user
        @projects = @user.projects
        @avatar = current_user.portfolio.avatar.url(:regular)
        @markdown_info = current_user.portfolio.markdown_info
        @project_avatars = Project.avatar_urls(current_user)
      else
        @projects = []
      end
    else
      redirect_to root_path
    end
  end
end

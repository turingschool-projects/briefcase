class DashboardController < ApplicationController
  def index
    if (logged_in?)
      if(current_user.portfolio)
        @user = current_user
        @projects = @user.projects
        @avatar = current_user.portfolio.avatar.url
        @markdown_info = current_user.portfolio.markdown_info
        @project_avatars = Project.avatar_urls(current_user)
      else
        @projects = []
      end
    else
      redirect_to root_path

    if(current_user.portfolio)
      @projects = current_user.portfolio.projects
      @avatar = current_user.portfolio.avatar.url
      @project_avatars = Project.avatar_urls(current_user)
    else
      @projects = []
    end
  end
end

class DashboardController < ApplicationController
  def index
    if(current_user.portfolio)
      @projects = current_user.portfolio.projects
      @avatar = current_user.portfolio.avatar.url
    else
      @projects = []
    end
  end
end

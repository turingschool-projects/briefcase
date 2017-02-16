class DashboardController < ApplicationController
  def index
    if(current_user.portfolio)
      @projects = current_user.portfolio.projects
    else
      @projects = []
    end
  end
end

class DashboardController < ApplicationController
  def index
    if (logged_in?)
      @dashboard_presenter = DashboardPresenter.new(current_user)
      if(current_user.portfolio)
        @projects = @dashboard_presenter.projects
      else
        @projects = []
      end
    else
      redirect_to root_path
    end
  end
end

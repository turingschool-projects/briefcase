class DashboardController < ApplicationController
  def index
    if (logged_in?)
      if(current_user.portfolio)
        @dashboard_presenter = DashboardPresenter.new(current_user)
      else
        @projects = []
      end
    else
      redirect_to root_path
    end
  end
end

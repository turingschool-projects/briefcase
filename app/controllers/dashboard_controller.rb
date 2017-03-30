class DashboardController < ApplicationController
  def index
    if (logged_in?)
      @dashboard_presenter = DashboardPresenter.new(current_user)
    else
      redirect_to root_path
    end
  end
end

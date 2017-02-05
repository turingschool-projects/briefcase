class DashboardController < ApplicationController
  def index
    if(logged_in?)
      render component: 'Dashboard', props: { user: current_user }
    else
      render component: 'Main', props: { users: @users, signed_in: 0 }
    end
  end
end

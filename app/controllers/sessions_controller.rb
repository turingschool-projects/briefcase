class SessionsController < ApplicationController
  def new
    redirect_to '/auth/census'
  end

  class SessionsController < ApplicationController
    def create
      census_user_info = env["omniauth.auth"]
    end
  end
  
end

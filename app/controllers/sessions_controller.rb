class SessionsController < ApplicationController
  def new
    redirect_to '/auth/census'
  end

  def create
    census_user_info = env["omniauth.auth"]
    @user = User.create_from_census(census_user_info)
    if(@user)
      session["user_id"] = @user.id
      render component: 'Dashboard', props: { user: user }
    else
      render component: 'Main', props: { users: User.all, signed_in: 0, unsucessful: "Unsuccessful Login" }
    end
  end

  def destroy
    reset_session
    render component: 'Main', props: { users: User.all, signed_in: 0 }
  end

end

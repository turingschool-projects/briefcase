class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  respond_to :json

  helper_method :current_user, :logged_in?

  def current_user
    User.first
    # @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    current_user
  end
end

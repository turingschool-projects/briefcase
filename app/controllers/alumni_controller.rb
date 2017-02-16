class AlumniController < ApplicationController
  def index
    @portfolios = Portfolio.all
  end

  def show
    @user = User.find_by(slug: params[:slug])
    @portfolio = @user.portfolio
  end
end

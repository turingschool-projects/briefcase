class AlumniController < ApplicationController
  def index
    @portfolios = Portfolio.all
    @avatar_urls = Portfolio.avatar_urls
  end

  def show
    @user = User.find_by(slug: params[:slug])
    @portfolio = @user.portfolio
  end
end

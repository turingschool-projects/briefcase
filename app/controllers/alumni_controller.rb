class AlumniController < ApplicationController
  def index
    @portfolios = Portfolio.all
  end

  def show
    @portfolio = User.find_by(slug: params[:slug]).portfolio
  end
end

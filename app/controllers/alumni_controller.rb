require 'redcarpet'
require 'redcarpet/render_strip'


class AlumniController < ApplicationController
  def index
    @portfolio = PortfolioPresenter.new(Portfolio)
    @portfolios = PortfolioPresenter.new(Portfolio).all
  end

  def show
    @user = UserPresenter.new(User.find_by(slug: params[:slug]))
  end
end

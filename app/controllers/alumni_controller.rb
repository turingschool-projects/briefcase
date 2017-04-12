require 'redcarpet'
require 'redcarpet/render_strip'


class AlumniController < ApplicationController
  def index
    @portfolios = PortfolioPresenter.new
  end

  def show
    @user = UserPresenter.new(User.find_by(slug: params[:slug]))
  end
end

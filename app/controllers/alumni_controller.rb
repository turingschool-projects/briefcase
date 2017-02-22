require 'redcarpet'
require 'redcarpet/render_strip'


class AlumniController < ApplicationController
  def index
    @portfolio = PortfolioPresenter.new(Portfolio)
    @port_asc = Portfolio.order(full_name: :asc)
    @port_desc = Portfolio.order(full_name: :desc)
  end

  def show
    @user = UserPresenter.new(User.find_by(slug: params[:slug]))
  end

end

require 'redcarpet'
require 'redcarpet/render_strip'

class AlumniController < ApplicationController
  def index
    @portfolios = Portfolio.all
    @avatar_urls = Portfolio.avatar_urls
    @bios = Portfolio.markdown_bios
    @locations = Portfolio.locations
  end

  def show
    @user = User.find_by(slug: params[:slug])
    @portfolio = @user.portfolio
    @avatar_urls = @user.portfolio.project_avatar_urls
    @markdown_info = @portfolio.markdown_info
  end

end

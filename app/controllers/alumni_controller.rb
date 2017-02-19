require 'redcarpet'
require 'redcarpet/render_strip'

class AlumniController < ApplicationController
  def index
    @portfolios = Portfolio.all
    @avatar_urls = Portfolio.avatar_urls
  end

  def show
    @user = User.find_by(slug: params[:slug])
    @portfolio = @user.portfolio
    @avatar_urls = @user.portfolio.project_avatar_urls

    markdown = Redcarpet::Markdown.new(Redcarpet::Render::StripDown)
    @bio = markdown.render(@portfolio.bio)
    @markdown_info = @portfolio.markdown_info
  end


end

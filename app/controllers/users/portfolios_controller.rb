class Users::PortfoliosController < ApplicationController

  def show
    @user = User.find(params[:user_id])
  end

  def new
    @user = current_user
  end

  def create
    new_portfolio = Portfolio.new(portfolio_params)
    if(new_portfolio.save)
      redirect_to dashboard_path
    else
      render component: 'PortfolioNew', props: { user: current_user, projects: current_user.projects, portfolio: current_user.portfolio }
    end
  end

  def edit
    @user = current_user
  end

  def update
    portfolio = Portfolio.find(params["portfolio"]["id"])
    user_id = params["portfolio"]["user_id"]
    if(portfolio.update(portfolio_params))
      render js: "/users/#{user_id}/portfolio"
    else
      render component: 'PortfolioEdit', props: { user: current_user, projects: current_user.projects, portfolio: current_user.portfolio }
    end
  end

  def destroy
  end

  private
    def portfolio_params
      params.require("portfolio").permit("full_name", "title", "cohort", "github_url", "linkedin_url", "bio", "background", "resume_file", "locations", "looking_for", "best_at", "hired", "hired_by", "user_id")
    end
end

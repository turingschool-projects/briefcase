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

  private
    def portfolio_params
      params.require("data")["portfolio"].permit("full_name", "title", "cohort", "github_url", "linkedin_url", "bio", "background", "resume_file", "locations", "looking_for", "best_at", "hired", "hired_by", "user_id")
    end
end

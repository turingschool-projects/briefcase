class Users::PortfoliosController < ApplicationController

  def show
    @user = User.find_by(slug: params["user_slug"])
  end

  def new
    @user = current_user
  end

  def create
    user = User.find(params[:user_id])
    new_portfolio = user.build_portfolio(portfolio_params)

    if(new_portfolio.save)
      render js: "/dashboard"
    else
      render component: 'PortfolioNew', props: { user: current_user, projects: current_user.projects, portfolio: current_user.portfolio }
    end
  end

  def edit
    @user = current_user
  end

  def update
    portfolio = Portfolio.find(params[:portfolio][:id])
    if(portfolio.update(portfolio_params))
      render js: "/dashboard"
    else
      render component: 'PortfolioEdit', props: { user: current_user, projects: current_user.projects, portfolio: current_user.portfolio }
    end
  end

  def delete
    render component: "DeletePortfolio", props: { user: current_user, portfolio: current_user.portfolio}
  end

  def destroy
    user = User.find(params[:user_id])
    if(user.portfolio.projects.destroy_all)
      user.portfolio.delete
      render js: "/dashboard"
    else
      render component: "DeletePortfolio", props: { user: current_user, portfolio: current_user.portfolio}
    end
  end

  private
    def portfolio_params
      params.require("portfolio").permit("full_name", "title", "cohort", "github_url", "linkedin_url", "bio", "background", "resume_file", "locations", "looking_for", "best_at", "hired", "hired_by", "user_id", "email", "twitter_url", "personal_url", "hired_by")
    end
end

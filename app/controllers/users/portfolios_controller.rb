class Users::PortfoliosController < ApplicationController

  def show
    @user = User.find_by(slug: params["user_slug"])
  end

  def new
    @user = current_user
  end

  def create
    user = User.find_by(slug: params["user_slug"])
    new_portfolio = user.build_portfolio(portfolio_params)

    if(new_portfolio.save)
      sleep(4)
      render js: "/alumni/#{user.slug}/portfolio"
    else
      render component: 'PortfolioNew', props: { user: current_user, projects: current_user.projects, portfolio: current_user.portfolio }
    end
  end

  def edit
    @user = current_user
  end

  def update
    user = User.find_by(slug: params["user_slug"])
    portfolio = user.portfolio

    if(portfolio.update(portfolio_params))
      sleep(4)
      render js: "/alumni/#{user.slug}/portfolio"
    else
      render component: 'PortfolioEdit', props: { user: current_user, projects: current_user.projects, portfolio: current_user.portfolio }
    end
  end

  def delete
    user = User.find_by(slug: params["user_slug"])
    render component: "DeletePortfolio", props: { user: user }
  end

  def destroy
    user = User.find_by(slug: params["user_slug"])
    user.portfolio.delete
    render component: 'Dashboard', props: { user: current_user, projects: current_user.projects, portfolio: current_user.portfolio }
  end

  private
    def portfolio_params
      params.require("portfolio").permit("full_name", "title", "cohort", "github_url", "linkedin_url", "bio", "background", "resume_file", "locations", "looking_for", "best_at", "hired", "hired_by", "user_id")
    end
end

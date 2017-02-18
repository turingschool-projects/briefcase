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
      update_avatar(user, new_portfolio) if params[:portfolio][:avatar]
      update_resume(user, new_portfolio) if params[:portfolio][:resume]

      render js: "/dashboard"
    else
      render component: 'PortfolioNew', props: { user: current_user, projects: current_user.projects, portfolio: current_user.portfolio }, status: 400
    end
  end

  def edit
    @user = current_user
  end

  def update
    # params[:portfolio][:bio] = Kramdown::Document.new(params[:portfolio][:bio]).to_html if params[:portfolio][:bio]
    # params[:portfolio][:best_at] = Kramdown::Document.new(params[:portfolio][:best_at]).to_html if params[:portfolio][:best_at]
    # params[:portfolio][:looking_for] = Kramdown::Document.new(params[:portfolio][:looking_for]).to_html if params[:portfolio][:looking_for]

    user = User.find(params[:user_id])
    portfolio = Portfolio.find(params[:portfolio][:id])

    if(portfolio.update(portfolio_params))
      update_avatar(user, portfolio) if params[:portfolio][:avatar]
      update_resume(user, portfolio) if params[:portfolio][:resume]

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

    def update_avatar(user, portfolio)
      image = Paperclip.io_adapters.for(params[:portfolio][:avatar])
      image.original_filename = user.slug
      portfolio.update(avatar: image)
    end

    def update_resume(user, portfolio)
      file = Paperclip.io_adapters.for(params[:portfolio][:resume])
      file.original_filename = user.slug
      portfolio.update(resume: file)
    end
end

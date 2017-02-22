class Users::PortfoliosController < ApplicationController

  def show
    @user = User.find_by(slug: params["user_slug"])
  end

  def new
    @user = current_user
    @locations = Location.distinct_city_states
  end

  def create
    user = User.find(params[:user_id])
    new_portfolio = user.build_portfolio(portfolio_params)

    if(new_portfolio.save)
      update_avatar(user, new_portfolio) if params[:portfolio][:avatar]
      update_resume(user, new_portfolio) if params[:portfolio][:resume]
      update_locations(new_portfolio) if params[:portfolio][:locations]

      render js: "/dashboard"
    else
      render component: 'PortfolioNew', props: { user: current_user, portfolio: current_user.portfolio, slug: current_user.slug, locations: Location.distinct_city_states}, status: 400
    end
  end

  def edit
    @user = current_user
    @locations = Location.distinct_city_states
  end

  def update
    user = User.find(params[:user_id])
    portfolio = Portfolio.find(params[:portfolio][:id])

    if(portfolio.update(portfolio_params))
      update_avatar(user, portfolio) if params[:portfolio][:avatar]
      update_resume(user, portfolio) if params[:portfolio][:resume]
      update_locations(portfolio) if params[:portfolio][:locations]

      render js: "/dashboard"
    else
      render component: 'PortfolioEdit', props: { user: current_user, portfolio: current_user.portfolio, slug: current_user.slug, avatar: current_user.portfolio.avatar.url, locations: Location.distinct_city_states, userLocations: current_user.portfolio.locations }
    end
  end

  def delete
    render component: "DeletePortfolio", props: { user: current_user, portfolio: current_user.portfolio}
  end

  def destroy
    user = User.find(params[:user_id])
    if(user.portfolio.projects.destroy_all)
      delete_relationships(user)
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

    def update_locations(portfolio)
      locations = portfolio.create_locations(params[:portfolio][:locations])
    end

    def delete_relationships(user)
      user.portfolio.locations.delete_all
      user.portfolio.delete
    end
end

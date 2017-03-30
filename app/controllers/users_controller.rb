class UsersController < ApplicationController
  def edit
    user = User.find_by(slug: params["user_slug"])
    render component: "Edit", props: { user: @user }
  end

  def account
    @user = User.find(params["user_id"])
  end

  def update
    @user = User.find_by(id: params[:user_id])
    portfolio = @user.build_portfolio(avatar: params[:portfolio][:avatar])
    if(portfolio.save)
      redirect_to dashboard_path
    else
      render component: "PortfolioNew"
    end
  end

  private
    def first_name_from_slug
      params[:slug].split('-')[0]
    end

    def last_name_from_slug
      params[:slug].split('-')[-1]
    end
end

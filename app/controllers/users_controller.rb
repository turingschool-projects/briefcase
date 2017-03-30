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
end

class UserPresenter
  def initialize(user)
    @user = user
  end

  def portfolio
    @user.portfolio
  end

  def avatar_urls
    @user.portfolio.project_avatar_urls
  end

  def avatar
    @user.portfolio.avatar.url
  end

  def markdown_info
    @user.portfolio.markdown_info
  end

  def projects
    @user.portfolio.projects
  end
end
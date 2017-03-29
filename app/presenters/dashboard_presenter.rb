class DashboardPresenter
  def initialize(user)
    @user = user
  end

  def projects
    @user.projects
  end

  def portfolio
    @user.portfolio
  end

  def avatar
    @user.portfolio.avatar.url(:square)
  end

  def markdown_info
    @user.portfolio.markdown_info
  end

  def project_avatars
    Project.avatar_urls(@user)
  end
end

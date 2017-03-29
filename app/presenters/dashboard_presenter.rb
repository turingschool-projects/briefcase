class DashboardPresenter
  attr_reader :user
  
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
    @user.portfolio.avatar.url(:square) if portfolio
  end

  def markdown_info
    @user.portfolio.markdown_info if portfolio
  end

  def project_avatars
    Project.avatar_urls(@user)
  end
end

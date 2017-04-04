class PortfolioForReact
  def initialize(portfolio)
    @portfolio = {
      :id => portfolio.id,
      :title => portfolio.title,
      :full_name => portfolio.full_name,
      :bio => portfolio.bio,
      :locations => portfolio.locations,
      :github_url => portfolio.github_url,
      :linkedin_url => portfolio.linkedin_url,
      :twitter_url => portfolio.twitter_url,
      :personal_url => portfolio.personal_url,
      :user_slug => portfolio.user_slug
    }
    avatar_urls = {}
    avatar_urls[:thumb] = portfolio.avatar.url(:thumb)
    avatar_urls[:square] = portfolio.avatar.url(:square)
    avatar_urls[:medium] = portfolio.avatar.url(:medium)
    avatar_urls[:regular] = portfolio.avatar.url(:regular)
    @portfolio[:avatar_urls] = avatar_urls
  end

  def output_for_react
    @portfolio
  end

end

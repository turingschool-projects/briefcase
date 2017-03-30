class PortfolioPresenter
  def initialize(portfolios)
    @portfolios = portfolios
  end

  def all
    build_up_portfolios
  end

  def avatar_urls
    @portfolios.avatar_urls
  end

  def bios
    @portfolios.markdown_bios
  end

  def locations
    @portfolios.locations
  end

  def desc
    @portfolios.order(full_name: :desc)
  end

  def asc
    @portfolio.order(full_name: :asc)
  end

  def build_up_portfolios
    @portfolios.all.map do |one_portfolio|
      PortfolioForReact.new(one_portfolio).output_for_react
    end
  end
end

# class PortfolioForReact
#   # def initialize(id, title, full_name, avatar_urls, bio, locations, github_url, linkedin_url, twitter_url, personal_url, user_slug)
#   def initialize(portfolio)
#     @portfolio = {
#       :id => portfolio.id,
#       :title => portfolio.title,
#       :full_name => portfolio.full_name,
#       :bio => portfolio.bio,
#       :locations => portfolio.locations,
#       :github_url => portfolio.github_url,
#       :linkedin_url => portfolio.linkedin_url,
#       :twitter_url => portfolio.twitter_url,
#       :personal_url => portfolio.personal_url,
#       :user_slug => portfolio.user_slug
#     }
#     avatar_urls = {}
#     avatar_urls[:thumb] = portfolio.avatar.url(:thumb)
#     avatar_urls[:square] = portfolio.avatar.url(:square)
#     avatar_urls[:medium] = portfolio.avatar.url(:medium)
#     avatar_urls[:regular] = portfolio.avatar.url(:regular)
#     @portfolio[:avatar_urls] = avatar_urls
#   end

#   def output_for_react
#     @portfolio
#   end

# end

# Copied here for reference to see what is needed within the other components
# <%= react_component('Main', {portfolios: @portfolio.all,
#   user: current_user,
#   avatars: @portfolio.avatar_urls,
#   bios: @portfolio.bios,
#   locations: @portfolio.locations,
#   port_asc: @portfolio.asc,
#   port_desc: @portfolio.desc},
# {prerender: true}) %>


# <UserCard portfolios={newPortfolios}
#  avatars={this.props.avatars}
#  bios={this.props.bios}
#  locations={this.props.locations}/>
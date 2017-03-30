class PortfolioPresenter
  def initialize(portfolios)
    @portfolios = portfolios
  end

  def all
    # @portfolios.all
    output = build_up_portfolios
    return output
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
      avatar_urls = {}
      avatar_urls[:thumb] = one_portfolio.avatar.url(:thumb)
      avatar_urls[:square] = one_portfolio.avatar.url(:square)
      avatar_urls[:medium] = one_portfolio.avatar.url(:medium)
      avatar_urls[:regular] = one_portfolio.avatar.url(:regular)
      PortfolioForReact.new(one_portfolio.id,
                            one_portfolio.title,
                            one_portfolio.full_name,
                            avatar_urls,
                            one_portfolio.bio,
                            one_portfolio.locations,
                            one_portfolio.github_url,
                            one_portfolio.linkedin_url,
                            one_portfolio.twitter_url,
                            one_portfolio.personal_url,
                            one_portfolio.user_slug).output_for_react
    end
  end
end

class PortfolioForReact
  attr_reader :portfolio
  def initialize(id, title, full_name, avatar_urls, bio, locations, github_url, linkedin_url, twitter_url, personal_url, user_slug)
    @portfolio = {
      :id => id,
      :title => title,
      :full_name => full_name,
      :avatar_urls => avatar_urls,
      :bio => bio,
      :locations => locations,
      :github_url => github_url,
      :linkedin_url => linkedin_url,
      :twitter_url => twitter_url,
      :personal_url => personal_url,
      :user_slug => user_slug
    }
  end

  def output_for_react
    portfolio
  end

end

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
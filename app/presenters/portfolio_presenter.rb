class PortfolioPresenter
  def initialize(portfolios)
    @portfolios = portfolios
  end

  def all
    @portfolios.all
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
    # @portfolio.order(full_name: :asc)
    # Hijacked this method to test passing new PORO to Front-End
    pf = Portfolio.first
    PortfolioForReact.new()
  end
end


class PortfolioForReact
  attr_reader :portfolio
  def initialize(full_name, avatar_urls, bio, locations, github_url, linkedin_url)
    @portfolio = {
      full_name => full_name,
      avatar_urls => avatar_urls,
      bio => bio,
      locations => locations,
      github_url => github_url,
      linkedin_url => linkedin_url
    }
  end

end


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
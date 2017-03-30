class PortfolioPresenter
  def initialize(portfolios)
    @portfolios = portfolios
  end

  def all
    # @portfolios.all
    asc
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
    @portfolios.all.map do |one_portfolio|
      avatar_url = '/avatars/original/missing.png'
      PortfolioForReact.new(one_portfolio.title,
                            one_portfolio.full_name,
                            avatar_url,
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
  def initialize(title, full_name, avatar_url, bio, locations, github_url, linkedin_url, twitter_url, personal_url, user_slug)
    @portfolio = {
      :title => title,
      :full_name => full_name,
      :avatar_url => avatar_url,
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
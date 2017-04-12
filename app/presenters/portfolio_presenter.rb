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

  def previous_experience
    @portfolios.previous_experiences
  end

  def desc
    @portfolios.order(full_name: :desc)
  end

  def ascs
    @portfolios.order(full_name: :asc)
  end

  def build_up_portfolios
    @portfolios.all.published.map do |one_portfolio|
      PortfolioForReact.new(one_portfolio).output_for_react
    end
  end
end

class PortfolioPresenter
  def published
    build_up_portfolios
  end

  def avatar_urls
    Portfolio.avatar_urls
  end

  def bios
    Portfolio.markdown_bios
  end

  def locations
    Portfolio.locations
  end

  def desc
    Portfolio.order(full_name: :desc)
  end

  def asc
    @portfolio.order(full_name: :asc)
  end

  def build_up_portfolios
    Portfolio.all.published.map do |one_portfolio|
      PortfolioForReact.new(one_portfolio).output_for_react
    end
  end
end

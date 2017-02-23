class PortfolioPresenter
  def initialize(portfolio)
    @portfolio = portfolio
  end

  def all
    @portfolio.all
  end

  def avatar_urls
    @portfolio.avatar_urls
  end

  def bios
    @portfolio.markdown_bios
  end

  def locations
    @portfolio.locations
  end

  def desc
    @portfolio.order(full_name: :desc)
  end

  def asc
    @portfolio.order(full_name: :asc)
  end
end
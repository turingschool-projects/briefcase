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

  # def asc
  #   TestPortfolio.new(@portfolio.first.full_name, @portfolio.avatar_urls.first)
  #   binding.pry

  #   puts 'hello'
  # end
end


# class TestPortfolio
#   attr_reader :full_name, :avatar_urls
#   def initialize(full_name, avatar_urls)
#     @full_name = full_name
#     @avatar_urls = avatar_urls
#   end

# end
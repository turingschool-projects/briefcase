class AddProfileImageToPortfolios < ActiveRecord::Migration[5.0]
  def change
  	add_attachment :portfolio, :portfolio_image
  end
end

class AddProfileImage < ActiveRecord::Migration[5.0]
  def change
  	add_attachment :portfolios, :portfolio_image
  end
end

class AddSlugtoPortfolio < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolios, :user_slug, :string
  end
end

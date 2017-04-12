class UpdatePublishedToBooleanOnPortfolio < ActiveRecord::Migration[5.0]
  def change
    remove_column :portfolios, :published, :integer
    add_column :portfolios, :published, :boolean, default: true
  end
end

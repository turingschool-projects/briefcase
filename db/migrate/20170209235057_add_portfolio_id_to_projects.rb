class AddPortfolioIdToProjects < ActiveRecord::Migration[5.0]
  def change
    add_reference :projects, :portfolio, foreign_key: true
  end
end

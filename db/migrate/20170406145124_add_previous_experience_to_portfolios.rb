class AddPreviousExperienceToPortfolios < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolios, :previous_experience, :text
  end
end

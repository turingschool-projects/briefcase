class CreatePortfolioPastExperiences < ActiveRecord::Migration[5.0]
  def change
    create_table :portfolio_past_experiences do |t|
      t.references :portfolio, foreign_key: true
      t.references :past_experience, foreign_key: true
    end
  end
end

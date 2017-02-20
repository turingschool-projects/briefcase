class AddResumeToPortfolios < ActiveRecord::Migration[5.0]
  def self.up
    add_attachment :portfolios, :resume
  end

  def self.down
    remove_attachment :portfolios, :resume
  end
end

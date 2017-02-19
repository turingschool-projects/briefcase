class AddAvatarToPortfolios < ActiveRecord::Migration[5.0]
  def self.up
   add_attachment :portfolios, :avatar
 end

 def self.down
   remove_attachment :portfolios, :avatar
 end
end

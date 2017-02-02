class AddBackgroundToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :bio, :text
    add_column :users, :background, :string
    add_column :users, :resume_file, :string
    add_column :users, :locations, :text
    add_column :users, :looking_for, :text
    add_column :users, :best_at, :text
    add_column :users, :hired, :integer
    add_column :users, :published, :integer
  end
end

class MassChanges < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolios, :personal_url, :string
    add_column :portfolios, :twitter_url, :string

    remove_column :users, :password_digest
    remove_column :users, :description
    remove_column :users, :github_url
    remove_column :users, :linkedin_url
    remove_column :users, :bio
    remove_column :users, :background
    remove_column :users, :resume_file
    remove_column :users, :locations
    remove_column :users, :looking_for
    remove_column :users, :best_at
    remove_column :users, :hired
    remove_column :users, :published
    remove_column :users, :title
  end
end

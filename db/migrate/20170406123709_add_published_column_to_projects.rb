class AddPublishedColumnToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :published, :boolean, default: false
  end
end

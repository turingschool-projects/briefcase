class AddColumnToProjects < ActiveRecord::Migration[5.0]
  def change
 		add_reference :projects, :user, index: true
    add_foreign_key :projects, :users
  end
end

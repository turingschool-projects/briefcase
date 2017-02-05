class ChangeColumnNameMyAreasOfFocusonProjects < ActiveRecord::Migration[5.0]
  def change
  	rename_column :projects, :my_areas_of_focus, :areas_of_focus
  end
end

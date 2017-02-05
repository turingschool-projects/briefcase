class CreateTableProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :project_name
      t.string :github
      t.string :code_climate_url
      t.string :travis_ci_url
      t.string :production_url
      t.string :screenshot
      t.string :description
      t.string :my_areas_of_focus
    end
  end
end

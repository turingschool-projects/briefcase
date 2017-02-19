class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.string :city
      t.references :portfolio, foreign_key: true
      t.string :state
      t.string :location

      t.timestamps
    end
  end
end

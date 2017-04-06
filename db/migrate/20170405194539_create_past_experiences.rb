class CreatePastExperiences < ActiveRecord::Migration[5.0]
  def change
    create_table :past_experiences do |t|
      t.text :experience

      t.timestamps
    end
  end
end

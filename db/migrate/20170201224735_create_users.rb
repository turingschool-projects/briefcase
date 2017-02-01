class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string   "first_name"
      t.string   "last_name"
      t.string   "email"
      t.string   "password_digest"
      t.integer  "cohort"
      t.text     "description"
      t.text     "github_url"
      t.text     "linkedin_url"
      t.datetime "created_at"
      t.datetime "updated_at"
    end
  end
end

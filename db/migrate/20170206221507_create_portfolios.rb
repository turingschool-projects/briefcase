class CreatePortfolios < ActiveRecord::Migration[5.0]
  def change
    create_table :portfolios do |t|
      t.string   "email"
      t.string   "password_digest"
      t.integer  "cohort"
      t.text     "description"
      t.text     "github_url"
      t.text     "linkedin_url"
      t.text     "bio"
      t.string   "background"
      t.string   "resume_file"
      t.text     "locations"
      t.text     "looking_for"
      t.text     "best_at"
      t.integer  "hired"
      t.integer  "published"
      t.references :user
      t.timestamps
    end

    add_reference :projects, :portfolio, index: true
    add_foreign_key :projects, :portfolios
  end
end

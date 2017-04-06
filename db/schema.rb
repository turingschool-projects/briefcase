# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170406145124) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "citext"

  create_table "locations", force: :cascade do |t|
    t.string   "city"
    t.integer  "portfolio_id"
    t.string   "state"
    t.string   "location"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["portfolio_id"], name: "index_locations_on_portfolio_id", using: :btree
  end

  create_table "past_experiences", force: :cascade do |t|
    t.text     "experience"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "portfolio_past_experiences", force: :cascade do |t|
    t.integer "portfolio_id"
    t.integer "past_experience_id"
    t.index ["past_experience_id"], name: "index_portfolio_past_experiences_on_past_experience_id", using: :btree
    t.index ["portfolio_id"], name: "index_portfolio_past_experiences_on_portfolio_id", using: :btree
  end

  create_table "portfolios", force: :cascade do |t|
    t.string   "email"
    t.string   "password_digest"
    t.integer  "cohort"
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
    t.string   "full_name"
    t.string   "title"
    t.string   "hired_by"
    t.integer  "user_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "user_slug"
    t.string   "personal_url"
    t.string   "twitter_url"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "resume_file_name"
    t.string   "resume_content_type"
    t.integer  "resume_file_size"
    t.datetime "resume_updated_at"
    t.text     "previous_experience"
    t.index ["user_id"], name: "index_portfolios_on_user_id", using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.string   "github"
    t.string   "code_climate_url"
    t.string   "travis_ci_url"
    t.string   "production_url"
    t.string   "screenshot"
    t.string   "description"
    t.string   "areas_of_focus"
    t.integer  "user_id"
    t.integer  "portfolio_id"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["portfolio_id"], name: "index_projects_on_portfolio_id", using: :btree
    t.index ["user_id"], name: "index_projects_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.citext   "first_name"
    t.citext   "last_name"
    t.string   "email"
    t.integer  "cohort"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "uid"
    t.string   "access_token"
    t.string   "slug"
  end

  add_foreign_key "locations", "portfolios"
  add_foreign_key "portfolio_past_experiences", "past_experiences"
  add_foreign_key "portfolio_past_experiences", "portfolios"
  add_foreign_key "projects", "portfolios"
  add_foreign_key "projects", "users"
end

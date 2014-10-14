# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20140922165300) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: true do |t|
    t.string   "name"
    t.string   "year"
    t.string   "artist"
    t.integer  "popularity"
    t.string   "release_date"
    t.string   "genre"
    t.string   "url"
    t.string   "available_markets"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "user_id"
    t.string   "name"
    t.string   "email"
    t.string   "provider"
    t.string   "uid"
    t.string   "picURL"
    t.string   "token"
    t.string   "refresh_token"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

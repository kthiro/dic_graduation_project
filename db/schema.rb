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

ActiveRecord::Schema.define(version: 20181126143827) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "relationships", force: :cascade do |t|
    t.integer "follower_id", null: false
    t.integer "leader_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["follower_id", "leader_id"], name: "index_relationships_on_follower_id_and_leader_id", unique: true
    t.index ["follower_id"], name: "index_relationships_on_follower_id"
    t.index ["leader_id"], name: "index_relationships_on_leader_id"
  end

  create_table "team_administrators", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "team_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_team_administrators_on_team_id"
    t.index ["user_id", "team_id"], name: "index_team_administrators_on_user_id_and_team_id", unique: true
    t.index ["user_id"], name: "index_team_administrators_on_user_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name", limit: 50, null: false
    t.string "sport_event", limit: 100
    t.string "area", limit: 100
    t.integer "number_of_member"
    t.string "profile_image"
    t.text "introduction"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name", limit: 30, null: false
    t.string "email", limit: 255, null: false
    t.string "password_digest", null: false
    t.string "profile_image"
    t.string "sport_event", limit: 100
    t.integer "sport_event_career"
    t.string "area", limit: 100
    t.integer "sex"
    t.text "introduction"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "users_conversations", force: :cascade do |t|
    t.integer "sender_id", null: false
    t.integer "recipient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "latest_message"
    t.index ["recipient_id"], name: "index_users_conversations_on_recipient_id"
    t.index ["sender_id", "recipient_id"], name: "index_users_conversations_on_sender_id_and_recipient_id", unique: true
    t.index ["sender_id"], name: "index_users_conversations_on_sender_id"
  end

  create_table "users_messages", force: :cascade do |t|
    t.text "body", null: false
    t.bigint "users_conversation_id", null: false
    t.bigint "user_id", null: false
    t.boolean "read", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_users_messages_on_user_id"
    t.index ["users_conversation_id"], name: "index_users_messages_on_users_conversation_id"
  end

  add_foreign_key "team_administrators", "teams"
  add_foreign_key "team_administrators", "users"
  add_foreign_key "users_messages", "users"
  add_foreign_key "users_messages", "users_conversations"
end

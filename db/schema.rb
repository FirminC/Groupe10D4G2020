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

ActiveRecord::Schema.define(version: 2020_11_04_231358) do

  create_table "scorecommunes", force: :cascade do |t|
    t.string "nom_com"
    t.integer "insee_com"
    t.integer "insee_dep"
    t.string "nom_dep"
    t.integer "insee_reg"
    t.integer "poplegal"
    t.float "accintnum"
    t.float "accinf"
    t.float "global_acces"
    t.float "comp_admin"
    t.float "comp_numsco"
    t.float "global_comp"
    t.float "score_global"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

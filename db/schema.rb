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

ActiveRecord::Schema.define(version: 2020_11_05_180154) do

  create_table "scorecommunes", force: :cascade do |t|
    t.string "nom_com"
    t.string "nom_iris"
    t.integer "num_com"
    t.integer "code_iris"
    t.integer "pop"
    t.string "lib_ci"
    t.integer "num_dep"
    t.string "nom_dep"
    t.integer "num_reg"
    t.string "nom_reg"
    t.integer "cp"
    t.float "acc_intnum"
    t.float "acc_inf"
    t.float "global_acces"
    t.float "comp_admin"
    t.float "comp_numsco"
    t.float "global_comp"
    t.float "score_global"
    t.float "moy_dept"
    t.float "moy_reg"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

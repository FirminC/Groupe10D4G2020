class CreateScorecommunes < ActiveRecord::Migration[5.2]
  def change
    create_table :scorecommunes do |t|
      t.string :nom_com
      t.integer :insee_com
      t.integer :insee_dep
      t.string :nom_dep
      t.string :insee_reg
      t.integer :poplegal
      t.float :accintnum
      t.float :accinf
      t.float :global_acces
      t.float :comp_admin
      t.float :comp_numsco
      t.float :global_comp
      t.float :score_global

      t.timestamps
    end
  end
end

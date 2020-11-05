class DropAndRecreate < ActiveRecord::Migration[5.2]
  def change
    drop_table :scorecommunes
    create_table :scorecommunes do |t|
      t.string :nom_com
      t.string :nom_iris
      t.integer :num_com
      t.integer :code_iris
      t.integer :pop
      t.string :lib_ci
      t.integer :num_dep
      t.string :nom_dep
      t.integer :num_reg
      t.string :nom_reg
      t.integer :cp
      t.float :acc_intnum
      t.float :acc_inf
      t.float :global_acces
      t.float :comp_admin
      t.float :comp_numsco
      t.float :global_comp
      t.float :score_global
      t.float :moy_dept
      t.float :moy_reg

      t.timestamps
    end
  end
end

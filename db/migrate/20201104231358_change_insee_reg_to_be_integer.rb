class ChangeInseeRegToBeInteger < ActiveRecord::Migration[5.2]
  def up
    change_column :scorecommunes, :insee_reg, :integer
  end

  def down
    change_column :scorecommunes, :insee_reg, :string
  end
end

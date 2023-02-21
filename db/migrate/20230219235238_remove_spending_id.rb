class RemoveSpendingId < ActiveRecord::Migration[7.0]
  def change
    remove_column :needs, :spending_id
  end
end

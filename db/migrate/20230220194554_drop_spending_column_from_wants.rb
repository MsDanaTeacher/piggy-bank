class DropSpendingColumnFromWants < ActiveRecord::Migration[7.0]
  def change
    remove_column :wants, :spending_id
  end
end

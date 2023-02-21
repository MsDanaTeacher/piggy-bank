class AddSpendingToWants < ActiveRecord::Migration[7.0]
  def change
    add_column :wants, :spending_id, :integer
  end
end

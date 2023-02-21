class AddSpendingIdToNeeds < ActiveRecord::Migration[7.0]
  def change
    add_column :needs, :spending_id, :integer
  end
end

class AddUserIdToSpendings < ActiveRecord::Migration[7.0]
  def change
    add_column :spendings, :user_id, :integer
  end
end

class AddColumnsToWants < ActiveRecord::Migration[7.0]
  def change
    add_column :wants, :user_id, :integer
    add_column :wants, :date, :string
  end
end

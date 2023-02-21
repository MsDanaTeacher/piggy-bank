class AddDateColumnBack < ActiveRecord::Migration[7.0]
  def change
    add_column :spendings, :date, :string
  end
end

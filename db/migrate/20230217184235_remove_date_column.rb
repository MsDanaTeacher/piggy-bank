class RemoveDateColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :spendings, :date
  end
end

class CreateSpendings < ActiveRecord::Migration[7.0]
  def change
    create_table :spendings do |t|
      t.string :reflection
      t.integer :budget
      t.datetime :date

      t.timestamps
    end
  end
end

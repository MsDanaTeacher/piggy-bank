class CreateNeeds < ActiveRecord::Migration[7.0]
  def change
    create_table :needs do |t|
      t.string :purchased
      t.integer :price

      t.timestamps
    end
  end
end

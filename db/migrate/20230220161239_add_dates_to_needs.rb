class AddDatesToNeeds < ActiveRecord::Migration[7.0]
  def change
    add_column :needs, :date, :string
  end
end

class RemoveDateFromNeeds < ActiveRecord::Migration[7.0]
  def change
    remove_column :needs, :date
  end
end

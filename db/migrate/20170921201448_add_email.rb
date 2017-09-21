class AddEmail < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :email, null: false
  end
end

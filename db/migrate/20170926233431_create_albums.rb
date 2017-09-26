class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :ownername, null: false
      t.string :title, null: false
      t.string :description
      t.integer :photo_id

      t.timestamps
    end

    add_index :albums, :ownername
  end
end

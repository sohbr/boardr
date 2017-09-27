class CreatePhotoAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :photo_albums do |t|
      t.integer :photo_id, null: false
      t.integer :album_id, null: false

      t.timestamps
    end
  end
end

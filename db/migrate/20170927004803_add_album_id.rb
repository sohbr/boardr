class AddAlbumId < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :album_id, :integer
    remove_column :albums, :photo_id
  end
end

class RemoveAlbumId < ActiveRecord::Migration[5.1]
  def change
    remove_column :photos, :album_id
  end
end

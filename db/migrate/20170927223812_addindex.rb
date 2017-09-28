class Addindex < ActiveRecord::Migration[5.1]
  def change
    add_index :photo_albums, [:album_id, :photo_id], unique: true
  end
end

class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :ownername, null: false
      t.string :img_url, null: false
      t.string :title
      t.text :description

      t.timestamps
    end

    add_index :photos, :ownername
  end
end

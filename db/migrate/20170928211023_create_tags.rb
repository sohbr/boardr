class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :word, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end

    add_index :tags, [:word, :photo_id], unique: true
  end
end

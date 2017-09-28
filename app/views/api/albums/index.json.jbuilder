@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :ownername, :title, :description,
                         :created_at, :updated_at
     json.photos do
       json.array! album.photos do |photo|
         json.extract! photo, :id, :ownername, :img_url, :title, :description, :created_at, :updated_at, :width, :height
       end
     end
  end
end

@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :ownername, :title, :description,
                         :created_at, :updated_at
  end
end

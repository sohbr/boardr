json.extract! @album, :id, :ownername, :title, :description,
                       :created_at, :updated_at

json.photos do
  json.array! @album.photos do |photo|
    json.extract! photo, :id, :img_url
  end
end

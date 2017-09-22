@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :owner_id, :img_url, :title, :description,
                         :created_at, :updated_at
  end
end

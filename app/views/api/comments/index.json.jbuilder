@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :user_id, :photo_id, :updated_at
    json.ago time_ago_in_words(comment.updated_at)
    json.user comment.user
  end
end

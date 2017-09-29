json.extract! @comment, :id, :body, :user_id, :photo_id, :updated_at
json.user @comment.user

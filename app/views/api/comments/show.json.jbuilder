json.extract! @comment, :id, :body, :user_id, :photo_id, :updated_at
json.ago time_ago_in_words(@comment.updated_at)
json.user @comment.user

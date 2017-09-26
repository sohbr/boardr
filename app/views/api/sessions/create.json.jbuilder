# @user or [errors]

json.session do
  json.currentUser do
    json.extract! @user, :username, :id, :img_url
  end
end

json.errors do
  json.session @user.errors.full_messages
end

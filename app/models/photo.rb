# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  owner_id    :integer          not null
#  img_url     :string           not null
#  title       :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord

  validates :ownername, :img_url, presence: true

  belongs_to :owner,
    primary_key: :username,
    foreign_key: :ownername,
    class_name: :User

end

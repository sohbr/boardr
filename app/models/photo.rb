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

  validates :owner_id, :img_url, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

end

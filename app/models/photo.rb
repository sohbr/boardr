# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  ownername   :string           not null
#  img_url     :string           not null
#  title       :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  width       :integer          not null
#  height      :integer          not null
#

class Photo < ApplicationRecord

  validates :ownername, :img_url, presence: true

  has_many :photo_albums,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :PhotoAlbum

  has_many :albums,
    through: :photo_albums,
    source: :album,

  belongs_to :owner,
    primary_key: :username,
    foreign_key: :ownername,
    class_name: :User


end

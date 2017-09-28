# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  ownername   :string           not null
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Album < ApplicationRecord

  validates :ownername, :title, presence: true

  has_many :photo_albums,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :PhotoAlbum,
    dependent: :destroy

  has_many :photos,
    through: :photo_albums,
    source: :photo

  belongs_to :owner,
    primary_key: :username,
    foreign_key: :ownername,
    class_name: :User

end

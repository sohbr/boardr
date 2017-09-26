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

  has_many :photos,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Photo

  belongs_to :owner,
    primary_key: :username,
    foriegn_key: :ownername,
    class_name: :User

end

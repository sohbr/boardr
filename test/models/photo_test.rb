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

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

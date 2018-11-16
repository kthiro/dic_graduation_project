class Relationship < ApplicationRecord
  belongs_to :follower, class_name: 'User'
  belongs_to :leader, class_name: 'User'
  
  validates_uniqueness_of :follower_id, scope: :leader_id
  
end

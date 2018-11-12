class UsersMessage < ApplicationRecord
  belongs_to :users_conversation
  belongs_to :user
  
  validates :body, presence: true, length: { maximum: 1000 }
  validates_presence_of :users_conversation_id, :user_id
  
  def message_time
    created_at.strftime("%Y/%m/%d %H:%M")
  end
  
end

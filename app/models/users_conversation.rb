class UsersConversation < ApplicationRecord
  
  belongs_to :sender, foreign_key: :sender_id, class_name: 'User'
  belongs_to :recipient, foreign_key: :recipient_id, class_name: 'User'
  
  has_many :users_messages, dependent: :destroy
  
  validates_uniqueness_of :sender_id, scope: :recipient_id
  
  scope :between, -> (sender_id, recipient_id) do
    where("(users_conversations.sender_id = ? AND users_conversations.recipient_id = ?) OR (users_conversations.sender_id = ? AND users_conversations.recipient_id = ?)", sender_id, recipient_id, recipient_id, sender_id)
  end
  
  scope :my_users_conversations, -> (my_id) do
    where("users_conversations.sender_id = ? OR users_conversations.recipient_id = ?", my_id, my_id)
  end
  
  
  def target_user(current_user)
    if sender_id == current_user.id
      User.find(recipient_id)
    elsif recipient_id == current_user.id
      User.find(sender_id)
    end
  end

end

class AddLatestMessageToUsersConversations < ActiveRecord::Migration[5.1]
  def change
    add_column :users_conversations, :latest_message, :datetime
  end
end

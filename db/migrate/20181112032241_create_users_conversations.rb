class CreateUsersConversations < ActiveRecord::Migration[5.1]
  def change
    create_table :users_conversations do |t|
      t.integer :sender_id, null: false, index: true
      t.integer :recipient_id, null: false, index: true

      t.timestamps
    end
    
    add_index :users_conversations, [:sender_id, :recipient_id], unique: true
    
  end
end

class CreateUsersMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :users_messages do |t|
      t.text :body, null: false, limit: 1000
      t.references :users_conversation, null: false, foreign_key: true, index:true
      t.references :user, null: false, foreign_key: true, index:true
      t.boolean :read, null: false, default: false

      t.timestamps
    end
  end
end

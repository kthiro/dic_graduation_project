class CreateRelationships < ActiveRecord::Migration[5.1]
  def change
    create_table :relationships do |t|
      t.integer :follower_id, null: false, index: true
      t.integer :leader_id, null: false, index: true

      t.timestamps
    end
    
    add_index :relationships, [:follower_id, :leader_id], unique: true
    
  end
end

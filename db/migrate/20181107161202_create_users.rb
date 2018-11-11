class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null:false, limit: 30
      t.string :email, null:false, limit: 255
      t.string :password_digest, null:false
      t.string :profile_image
      t.string :sport_event, limit: 100
      t.integer :sport_event_career
      t.string :area, limit: 100
      t.integer :sex
      t.text :introduction, limit: 140

      t.timestamps
      t.index :email, unique: true
    end
  end
end

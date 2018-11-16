class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :name, null: false, limit: 50
      t.string :sport_event, limit: 100
      t.string :area, limit: 100
      t.integer :number_of_member
      t.string :profile_image
      t.text :introduction, limit: 1000

      t.timestamps
    end
  end
end

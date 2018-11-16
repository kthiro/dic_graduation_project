class CreateTeamAdministrators < ActiveRecord::Migration[5.1]
  def change
    create_table :team_administrators do |t|
      t.references :user, null: false, foreign_key: true, index: true
      t.references :team, null: false, foreign_key: true, index: true

      t.timestamps
    end
    
    add_index :team_administrators, [:user_id, :team_id], unique: true
    
  end
end

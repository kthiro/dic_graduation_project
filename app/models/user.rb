class User < ApplicationRecord
  mount_uploader :profile_image, UserProfileImageUploader
  
  before_validation { email.downcase! }
  
  before_save :set_first_value
  
  validates :name, presence: true, length: { maximum: 30 }
  
  validates :email, presence: true, length: { maximum: 255 }, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  
  has_secure_password
  validates :password, length: { minimum:8 }, on: :create
  validates :password, length: { minimum:8 }, on: :update, allow_blank: true
  
  validates :sport_event, length: { maximum: 100 }
  
  validates :area, length: { maximum: 100 }
  
  validates :introduction, length: { maximum: 140 }
  
  enum sport_event_career: { "未登録": 0, "未経験": 1, "1年未満": 2, "1年以上3年未満": 3, "3年以上5年未満": 4, "5年以上10年未満": 5, "10年以上": 6 }
  enum sex: { "未選択": 0, "男性": 1, "女性": 2 }
  
  def self.ransackable_attributes(auth_object = nil)
    %w[name sport_event]
  end
  
  def self.ransackable_associations(auth_object = nil)
    []
  end
  
  has_many :active_relationships, foreign_key: 'follower_id', class_name: 'Relationship', dependent: :destroy
  has_many :leaders, through: :active_relationships, source: :leader
  
  has_many :passive_relationships, foreign_key: 'leader_id', class_name: 'Relationship', dependent: :destroy
  has_many :followers, through: :passive_relationships, source: :follower
  
  has_many :sending_users_conversations, foreign_key: 'sender_id', class_name: 'UsersConversation', dependent: :destroy
  has_many :recipient_users, through: :sending_users_conversations, source: :recipient
  
  has_many :receiving_users_conversations, foreign_key: 'recipient_id', class_name: 'UsersConversation', dependent: :destroy
  has_many :sender_users, through: :receiving_users_conversations, source: :sender
  
  has_many :users_messages, dependent: :destroy
  
  has_many :team_administrators, dependent: :destroy
  has_many :administering_teams, through: :team_administrators, source: :team
  
  private
  
  def set_first_value
    self.sport_event = '未登録' unless sport_event?
    self.sport_event_career = 0 unless sport_event_career?
    self.area = '未登録' unless area?
    self.sex = 0 unless sex?
    self.introduction = "未登録" unless introduction?
  end
end

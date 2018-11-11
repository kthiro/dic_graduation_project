class User < ApplicationRecord
  mount_uploader :profile_image, UserProfileImageUploader
  
  before_validation { email.downcase! }
  before_save :set_first_value
  
  validates :name, presence: true, length: { maximum: 30 }
  
  validates :email, presence: true, length: { maximum: 255 }, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  
  has_secure_password
  validates :password, length: { minimum:8 }
  
  validates :sport_event, length: { maximum: 100 }
  
  enum sport_event_career: { "未登録": 0, "未経験": 1, "1年未満": 2, "1年以上3年未満": 3, "3年以上5年未満": 4, "5年以上10年未満": 5, "10年以上": 6 }
  
  validates :area, length: { maximum: 100 }
  
  enum sex: { "未選択": 0, "男性": 1, "女性": 2 }
  
  validates :introduction, length: { maximum: 140 }

  private
  
  def set_first_value
    self.sport_event = '未登録' unless sport_event?
    self.sport_event_career = 0 unless sport_event_career?
    self.area = '未登録' unless area?
    self.sex = 0 unless sex?
    self.introduction = "未登録" unless introduction?
  end
  
end

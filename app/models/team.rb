class Team < ApplicationRecord
  
  mount_uploader :profile_image, TeamProfileImageUploader
  
  before_validation :set_first_value
  
  validates :name, presence: true, length: { maximum: 50 }
  validates :sport_event, :area, length: { maximum: 100 }
  validates :number_of_member, numericality: { only_integer: true, greater_than: 0, less_than: 1001 }
  validates :introduction, length: { maximum: 1000 }
  
  has_many :team_administrators, dependent: :destroy
  has_many :administrators, through: :team_administrators, source: :user
  
  private
  
  def set_first_value
    self.sport_event = '未登録' unless sport_event?
    self.area = '未登録' unless area?
    self.number_of_member = 1 unless number_of_member?
    self.introduction = '未登録' unless introduction?
  end
  
end

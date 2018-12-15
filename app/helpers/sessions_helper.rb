module SessionsHelper
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
  
  def logged_in?
    current_user.present?
  end
  
  def current_team
    @current_team ||= Team.find_by(id: session[:team_id])
  end
  
  def administering?
    current_team.present?
  end
end

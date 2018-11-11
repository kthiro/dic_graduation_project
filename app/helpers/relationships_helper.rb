module RelationshipsHelper
  def from_users_or_leaders
    if params[:name] == 'users'
      users_path
    elsif params[:name] == 'leaders'
      user_leaders_path(current_user.id)
    end
  end
end

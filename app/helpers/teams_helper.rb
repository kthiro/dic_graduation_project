module TeamsHelper
  
  def choose_new_or_edit
    if action_name == 'new' || action_name == 'confirm'
      confirm_teams_path
    elsif action_name == 'edit'
      team_path(@team.id)
    end
  end
  
end

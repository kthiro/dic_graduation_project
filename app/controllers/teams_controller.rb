class TeamsController < ApplicationController
  before_action :set_team, only: [:show, :edit, :update, :destroy]
  before_action :unlogged_in
  
  def new
    if params[:back]
      @team = Team.new(team_params)
      profile_image_retrieves_from_cache
    else
      @team = Team.new
    end
  end
  
  def confirm
    @team = Team.new(team_params)
    render 'new' if @team.invalid?
  end
  
  def create
    @team = Team.new(team_params)
    if @team.save
      profile_image_retrieves_from_cache
      @team.team_administrators.create!(user_id: current_user.id)
      redirect_to team_path(@team.id, team_administrator_id: current_user.id)
    else
      render 'new'
    end
  end

  def index
    @q = Team.ransack(params[:q])
    @teams = @q.result(distinct: true).order("updated_at DESC")
  end

  def show
    session[:team_id] = @team.id if params[:team_administrator_id]
  end

  def edit
  end
  
  def update
    @team.update(team_params)
    redirect_to team_path(@team.id), notice: 'チーム情報を更新しました'
  end
  
  def destroy
    @team.destroy
    redirect_to user_path(current_user.id)
  end
  
  private
  
  def team_params
    params.require(:team).permit(:name, :sport_event, :area, :number_of_member, :profile_image, :profile_image_cache, :introduction)
  end
  
  def profile_image_retrieves_from_cache
    @team.profile_image.retrieve_from_cache! params[:team][:profile_image_cache] if params[:team][:profile_image_cache]
  end
  
  def set_team
    @team = Team.find(params[:id])
  end
end

class SessionsController < ApplicationController
  def new
  end
  
  def create
    user = User.find_by(email: params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      redirect_to user_path(user.id), notice: 'ログインしました'
    else
      flash[:danger] = 'ログインに失敗しました'
      render 'new'
    end
  end
  
  def destroy
    if params[:administering_team_id]
      team = Team.find(params[:administering_team_id])
      session.delete(:team_id)
      redirect_to user_path(current_user.id), notice: "#{team.name}のチーム管理を終了しました"
    else
      session.delete(:user_id)
      session.delete(:team_id)
      redirect_to new_session_path, notice: 'ログアウトしました'
    end
  end
  
end

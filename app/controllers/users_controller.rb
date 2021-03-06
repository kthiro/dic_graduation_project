class UsersController < ApplicationController
  before_action :set_user, :unmatching_id, only: [:show, :edit, :update, :destroy]
  before_action :unlogged_in, except: [:new, :confirm, :create]
  
  def new
    if params[:back]
      @user = User.new(user_params)
    else
      @user = User.new
    end
  end
  
  def confirm
    @user = User.new(user_params)
    render 'new' if @user.invalid?
  end
  
  def create
    @user = User.new(user_params)
    begin
      @user.save
      redirect_to new_session_path, notice: 'ユーザー登録が完了しました。登録した内容でログインしてください。'
    rescue ActiveRecord::RecordNotUnique
      flash.now[:danger] = "既に登録済みのメールアドレスです。他のメールアドレスで登録してください。"
      render 'new'
    end
  end

  def index
    @q = User.ransack(params[:q])
    @users = @q.result(distinct: true).order("updated_at DESC")
    @relationships = current_user.active_relationships
  end

  def show
    @administering_teams = @user.administering_teams
  end

  def edit
  end
  
  def update
    if @user.update(user_params)
      redirect_to user_path(@user.id), notice: "ユーザー情報を更新しました"
    else
      flash[:notice] = "ユーザー情報の更新に失敗しました。"
      render 'edit'
    end
  end
  
  def destroy
    @user.destroy
    redirect_to users_path
  end
  
  private
  
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :profile_image,
                                 :profile_image_cache, :sport_event, :sport_event_career, :area, 
                                 :sex, :introduction)
  end
  
  def set_user
    @user = User.find(params[:id])
  end
end

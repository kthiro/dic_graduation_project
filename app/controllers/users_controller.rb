class UsersController < ApplicationController
  
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  
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
      redirect_to user_path(@user.id), notice: 'ユーザー登録が完了しました。'
    rescue ActiveRecord::RecordNotUnique
      flash.now[:danger] = "既に登録済みのメールアドレスです。他のメールアドレスで登録してください。"
      render 'new'
    end
  end

  def index
    @users = User.all
  end

  def show
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
  
  def retreive_image_from_cache
    unless params[:user][:image_cache] = ""
      @album.image.retrieve_from_cache! params[:user][:image_cache]
    end
  end
  
end

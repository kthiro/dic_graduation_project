class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  include SessionsHelper

  private
  
  def unlogged_in
    redirect_to '/404.html' unless logged_in?
  end
  
  def unmatching_id
    if params[:user_id]
      redirect_to '/404.html' unless "#{current_user.id}" == params[:user_id]
    elsif params[:id]
      redirect_to '/404.html' unless "#{current_user.id}" == params[:id]
    end
  end
  
end

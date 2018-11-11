class RelationshipsController < ApplicationController
  
  include RelationshipsHelper
  
  def create
    @relationship = current_user.active_relationships.build(leader_id: params[:user_id])
    @relationship.save
    redirect_to users_path, notice: "#{User.find(params[:user_id]).name}をフォローしました"
  end
  
  def destroy
    @relationship = current_user.active_relationships.find_by(leader_id: params[:id])
    @relationship.delete
    redirect_to from_users_or_leaders, notice: "#{User.find(@relationship.leader_id).name}のフォローを解除しました"
  end
  
end

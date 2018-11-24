class RelationshipsController < ApplicationController
  
  include RelationshipsHelper
  before_action :unlogged_in
  
  def create
    @relationship = current_user.active_relationships.build(leader_id: params[:leader_id])
    @relationship.save
    redirect_to from_users_or_leaders_or_followers, notice: "#{User.find(params[:leader_id]).name}をフォローしました"
  end
  
  def destroy
    @relationship = Relationship.find(params[:id])
    @relationship.delete
    redirect_to from_users_or_leaders_or_followers, notice: "#{User.find(@relationship.leader_id).name}のフォローを解除しました"
  end
  
end

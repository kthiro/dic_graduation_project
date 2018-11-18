class FollowersController < ApplicationController
  
  before_action :unlogged_in, :unmatching_id
  
  def index
    @followers = current_user.followers
    @relationships = current_user.active_relationships
  end
  
end

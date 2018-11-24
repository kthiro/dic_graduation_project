class LeadersController < ApplicationController
  
  before_action :unlogged_in, :unmatching_id
  
  def index
    @leaders = current_user.leaders
    @relationships = current_user.active_relationships
  end
  
end

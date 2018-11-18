class UsersConversationsController < ApplicationController
  
  before_action :set_users_conversation, only: [:show]
  before_action :unlogged_in, :unmatching_id

  def create
    if UsersConversation.find_by(sender_id: current_user.id, recipient_id: params[:recipient_id]) || UsersConversation.find_by(sender_id: params[:recipient_id], recipient_id: current_user.id)
      @conversation = UsersConversation.between(current_user.id, params[:recipient_id]).first
    else
      @conversation = current_user.sending_users_conversations.create!(users_conversation_params)
    end
    redirect_to user_users_conversation_path(current_user.id, @conversation.id)

  end

  def index
    @conversations = UsersConversation.my_users_conversations(current_user.id).order("updated_at DESC")
  end
  
  def show
    set_partner
    @message = @conversation.users_messages.build
    @messages = @conversation.users_messages.order("created_at DESC")
  end
  
  private
  
  def users_conversation_params
    params.permit(:recipient_id)
  end
  
  def set_users_conversation
    @user = current_user
    @conversation = UsersConversation.find(params[:id])
  end
  
  def set_partner
    if @conversation.sender_id == current_user.id
      @partner = User.find(@conversation.recipient_id)
    elsif @conversation.recipient_id == current_user.id
      @partner = User.find(@conversation.sender_id)
    end
  end
  
end

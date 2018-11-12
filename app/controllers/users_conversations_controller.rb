class UsersConversationsController < ApplicationController

  def create
    if UsersConversation.find_by(sender_id: current_user.id, recipient_id: params[:recipient_id]) || UsersConversation.find_by(sender_id: params[:recipient_id], recipient_id: current_user.id)
      @conversation = UsersConversation.between(current_user.id, params[:recipient_id]).first
    else
      @conversation = current_user.sending_users_conversations.create!(users_conversation_params)
    end
    redirect_to user_users_conversation_users_messages_path(current_user.id, @conversation.id)

  end

  def index
    @conversations = UsersConversation.my_users_conversations(current_user.id).order("updated_at DESC")
  end
  
  private
  
  def users_conversation_params
    params.permit(:recipient_id)
  end
  
end

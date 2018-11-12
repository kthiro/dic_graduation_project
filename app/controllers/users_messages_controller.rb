class UsersMessagesController < ApplicationController
  
  before_action :set_users_conversation, only: [:create, :index]
  
  def create
    @message = @conversation.users_messages.build(users_messages_params)
    
    if @message.save
      redirect_to user_users_conversation_users_messages_path(current_user.id, params[:users_conversation_id]), notice: 'メッセージを送信しました'
    else
      render 'index'
    end
  end
  
  def index
    if @conversation.sender_id == current_user.id
      @partner = User.find(@conversation.recipient_id)
    elsif @conversation.recipient_id == current_user.id
      @partner = User.find(@conversation.sender_id)
    end
    
    @user = current_user
    @message = @conversation.users_messages.build
    @messages = @conversation.users_messages.order("created_at DESC")
  end
  
  private
  
  def set_users_conversation
    @conversation = UsersConversation.find(params[:users_conversation_id])
  end
  
  def users_messages_params
    params.require(:users_message).permit(:body, :user_id)
  end
  
end

class UsersMessagesController < ApplicationController
  before_action :unlogged_in, :unmatching_id
  
  def create
    @user = current_user
    @conversation = UsersConversation.find(params[:users_conversation_id])
    set_partner
    @message = @conversation.users_messages.build(users_messages_params)
    @messages = @conversation.users_messages.order("created_at DESC")
    
    if @message.save
      respond_to do |format|
        @conversation.update(latest_message: @message.created_at)
        format.js { render :index }
      end
    else
      render template: "users_conversations/show"
    end
  end

  private

  def users_messages_params
    params.require(:users_message).permit(:body, :user_id)
  end

  def set_partner
    if @conversation.sender_id == current_user.id
      @partner = User.find(@conversation.recipient_id)
    elsif @conversation.recipient_id == current_user.id
      @partner = User.find(@conversation.sender_id)
    end
  end
end

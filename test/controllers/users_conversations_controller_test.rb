require 'test_helper'

class UsersConversationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get users_conversations_index_url
    assert_response :success
  end

end

require 'test_helper'

class UsersMessagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get users_messages_index_url
    assert_response :success
  end

end

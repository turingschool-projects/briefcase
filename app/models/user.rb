class User < ApplicationRecord
	has_many :projects

  def self.create_from_census(user_info)
    user = find_or_initialize_by(uid: user_info["uid"])
    user.access_token = user_info.credentials["token"]
    user.save ? user : false
  end
end

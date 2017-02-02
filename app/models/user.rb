class User < ApplicationRecord
  def self.create_from_census(user_info)
    user = find_or_initialize_by(census_uid: user_info["uid"]) do |u|
      if user_info.info["first_name"] && user_info.info["last_name"]
        u.username = user_info.info["first_name"] + " " + user_info.info["last_name"]
      end
    end
    user.census_access_token = user_info.credentials["token"]
    user.save ? user : false
  end
end

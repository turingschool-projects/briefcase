class User < ApplicationRecord
	has_many :projects
	has_one :portfolio

  def self.create_from_census(user_info)
    user = find_or_initialize_by(uid: user_info["uid"])
    user.first_name = user_info.info["first_name"]
    user.last_name = user_info.info["last_name"]
    user.uid = user_info.info["id"]
    user.access_token = user_info.credentials["token"]

    existing_user = User.find_by({first_name: user.first_name, last_name: user.last_name})
    if(existing_user)
      sync_user(user, existing_user)
    end

    user.save ? user : false
  end

  def self.sync_user(user, existing_user)
    user.bio = existing_user.bio
    user.email = existing_user.email
    user.description = existing_user.description
    user.github_url = existing_user.github_url
    user.linkedin_url = existing_user.linkedin_url
    user.background = existing_user.background
    user.resume_file = existing_user.resume_file
    user.locations = existing_user.locations
    user.looking_for = existing_user.looking_for
    user.best_at = existing_user.best_at
    user.hired = existing_user.hired
    user.published = existing_user.published
    user.title = existing_user.title
    user.cohort = existing_user.cohort
  end
end

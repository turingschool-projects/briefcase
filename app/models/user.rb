class User < ApplicationRecord
	has_many :projects, dependent: :destroy
	has_one :portfolio, dependent: :destroy


	after_create :set_slug

  def slug
    first_name.downcase.gsub(' ', '') + "-" + last_name.downcase.gsub(' ', '')
  end

  def to_param
    "#{slug}"
  end

  def self.create_from_census(user_info)
    user = find_or_initialize_by(uid: user_info["uid"])

    user.first_name = user_info.info["first_name"]
    user.last_name = user_info.info["last_name"]
    user.uid = user_info.info["id"]
    user.access_token = user_info.credentials["token"]
    existing_user = User.find_by({first_name: user.first_name, last_name: user.last_name})

    user.save ? user : false
  end

	private

		def set_slug
			self.update(slug: slug)
		end
end

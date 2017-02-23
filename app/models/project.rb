class Project < ApplicationRecord
	belongs_to :user
	belongs_to :portfolio
	validates :github, presence: true
	validates :name, presence: true
	validates :description, presence: true

	has_attached_file :avatar, styles: {
		thumb: '100x100>',
		square: '200x200#',
		medium: '300x300>'
	}

	validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/


	def self.avatar_urls(user)
		user.projects.reduce({}) do |result, project|
			result[project.id] = project.avatar.url
			result
		end
	end

end

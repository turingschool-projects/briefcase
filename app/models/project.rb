class Project < ApplicationRecord
	belongs_to :user

	validates :name, presence: true
	validates :github, presence: true


end

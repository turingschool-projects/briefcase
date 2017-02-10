class Project < ApplicationRecord
	belongs_to :user
	belongs_to :portfolio

	validates :name, presence: true


end

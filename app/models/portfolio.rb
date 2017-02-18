class Portfolio < ApplicationRecord
  has_many :projects, dependent: :destroy
  validates :full_name, presence: true 
  validates :github_url, presence: true 
  validates :linkedin_url, presence: true 
  validates :email, presence: true 
  validates :title, presence: true 
  validates :bio, presence: true 

  belongs_to :user
  after_create :set_slug


  has_attached_file :avatar, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }

  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

  def set_slug
    self.update(user_slug: self.user.slug)
  end

  def self.avatar_urls
    Portfolio.all.reduce({}) do |result, portfolio|
      result[portfolio.id] = portfolio.avatar.url
      result
    end
  end

  def project_avatar_urls
    self.projects.reduce({}) do |result, project|
      result[project.id] = project.avatar.url
      result
    end
  end
end

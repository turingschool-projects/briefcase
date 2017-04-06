require 'redcarpet'

class Portfolio < ApplicationRecord
  has_many :projects, dependent: :destroy
  validates :full_name, presence: true
  validates :github_url, presence: true
  validates :linkedin_url, presence: true
  validates :email, presence: true
  validates :title, presence: true
  validates :bio, presence: true
  has_many :locations, :dependent => false
  has_many :locations, dependent: :destroy
  has_many :portfolio_past_experiences
  has_many :portfolios, through: :portfolio_past_experiences

  belongs_to :user
  after_create :set_slug

  has_attached_file :avatar, styles: { thumb: '100x100>', square: '200x200#', medium: '300x300>',  regular: '365x365>'}
  has_attached_file :resume

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :resume, content_type: ["application/pdf"]

  scope :published, -> { where(published: true) }
  scope :draft, -> { where(published: false) }

  def set_slug
    self.update(user_slug: self.user.slug)
  end

  def self.avatar_urls
    Portfolio.all.reduce({}) do |result, portfolio|
      result[portfolio.id] = portfolio.avatar.url(:square)
      result
    end
  end

  def self.markdown_bios
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, fenced_code_blocks: true)

    Portfolio.all.reduce({}) do |result, portfolio|
      result[portfolio.id] = markdown.render(portfolio.bio)
      result
    end
  end

  def self.locations
    Portfolio.all.reduce({}) do |result, portfolio|
      result[portfolio.id] = portfolio.locations
      result
    end
  end

  def project_avatar_urls
    self.projects.reduce({}) do |result, project|
      result[project.id] = project.avatar.url(:regular)
      result
    end
  end

  def create_locations(checked_locations)
    self.locations.delete_all

    checked_locations.each do |location|
      if(location.class == ActionController::Parameters)
        city = location[:city].strip
        state = location[:state].strip
      else
        city = location.split(",").first.strip
        state = location.split(",").last.strip
      end
      self.locations.find_or_create_by(city: city, state: state)
    end
  end

  def markdown_info
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, fenced_code_blocks: true)
    self.bio.nil? ? bio = '' : bio = self.bio
    self.looking_for.nil? ? looking_for = '' : looking_for = self.looking_for
    self.best_at.nil? ? best_at = '' : best_at = self.best_at
    {
      bio: markdown.render(bio),
      looking_for: markdown.render(looking_for),
      best_at: markdown.render(best_at)
    }
  end

end

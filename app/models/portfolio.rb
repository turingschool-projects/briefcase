class Portfolio < ApplicationRecord
  has_many :projects, dependent: :destroy
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
end

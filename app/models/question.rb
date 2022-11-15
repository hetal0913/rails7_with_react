class Question < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :tag, presence: true

    scope :filter_tags, ->(value) { where(tag: value) if value.present?} 
end

class Review < ApplicationRecord
  belongs_to :list
  validates :comment, presence: true
  validates :rating, numericality: { only_ineger: true, greater_than_or_equal_to: 1, less_than_or_equal: 10 }
end

class Book < ApplicationRecord
  validates :title, presence: true, length: {maximum: 100}
  validates :author, presence: true, length: {maximum: 100}
  validates :publisher, presence: true, length: {maximum: 100}
  validates :genre, presence: true, length: {maximum: 100}
end

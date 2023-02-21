class Spending < ApplicationRecord
    # has_many :wants
    # has_many :needs
    belongs_to :user
    validates :date, uniqueness: {scope: :user_id}
end

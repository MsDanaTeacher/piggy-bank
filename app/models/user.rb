class User < ApplicationRecord
    has_secure_password
    has_many :spendings
    has_many :needs
    has_many :wants
    validates :username, uniqueness: :true
    validates :username, uniqueness: { case_sensitive: false }
end

class Student < ApplicationRecord
    has_many :data
    has_many :users, through: :data
end

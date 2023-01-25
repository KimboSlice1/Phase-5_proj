class Datum < ApplicationRecord
    belongs_to :student
    belongs_to :user, optional:true
end

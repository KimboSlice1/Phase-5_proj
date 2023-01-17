class User < ApplicationRecord
    has_many :data
    has_many :students, through: :data

    has_secure_password

    validates :email,  presence: true, uniqueness: true
    

    PASSWORD_REQUIREMENTS = /\A
    (?=.{6,}) 
    (?=.*\d)
    (?=.*[a-z])
    (?=.*[A-Z])
    (?=.*[[:^alnum:]])
    /x

    validates :password, presence: true, format: PASSWORD_REQUIREMENTS

    validates :password, confirmation: {case_sensitive: true}
end

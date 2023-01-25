class StudentSerializer < ActiveModel::Serializer
  attributes :name 
  has_many :data
end

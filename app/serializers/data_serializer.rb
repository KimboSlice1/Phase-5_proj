class DataSerializer < ActiveModel::Serializer
  attributes :id, :data_type, :comment
  
  has_one :student
  has_one :user
end

class DataSerializer < ActiveModel::Serializer
  attributes :id, :student_id, :user_id, :data_type, :comment
  
  has_one :student
  has_one :user
end

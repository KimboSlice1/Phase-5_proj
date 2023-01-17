class CreateData < ActiveRecord::Migration[7.0]
  def change
    create_table :data do |t|
      t.string :data_type
      t.string :comment
  
      # belongs_to :student
      # belongs_to :user
      t.belongs_to :student, foreign_key: true

      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end

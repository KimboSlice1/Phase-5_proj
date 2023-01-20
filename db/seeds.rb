    # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



puts '😩'

User.destroy_all

puts 'Removing old shit'

puts 'creating new users'



u1 = User.create!(name: 'User1', username: "User1", password_digest: 'Password_1234', password: 'Password_1234',email: "User1@user.com" )

u2 = User.create!(name: 'User2',username: "User2", password_digest: 'Password_1234', password: 'Password_1234',email: "User2@user.com")

u3 = User.create!(name: 'User3',username: "User3", password_digest: 'Password_1234', password: 'Password_1234', email: "User3@user.com")



puts 'creating new shitheads'
s1 = Student.create!(name: 'Student1')
s2 = Student.create!(name: 'Student2')
s3 = Student.create!(name: 'Student3')
s4 = Student.create!(name: 'Student4')
s5 = Student.create!(name: 'Student6')
s6 = Student.create!(name: 'Student6')
s7 = Student.create!(name: 'Student7')
s8 = Student.create!(name: 'Student8')
s9 = Student.create!(name: 'Student9')
s10 = Student.create!(name: 'Student10')
s11 = Student.create!(name: 'Student11')
s12 = Student.create!(name: 'Student12')
s13 = Student.create!(name: 'Student13')
s14 = Student.create!(name: 'Student14')


puts 'creating new data for the shitheads'

d1 = Datum.create!(student_id: s14.id, user_id: u1.id, data_type: 'Running Record', comment: 'FILL THIS SHIT IN')
d2 = Datum.create!(student_id: s13.id, user_id: u1.id, data_type: 'Checklist', comment: 'FILL TYPE IN')
d3 = Datum.create!(student_id: s12.id, user_id: u1.id, data_type: 'IEP Goal', comment: 'FILL IN')
d4 = Datum.create!(student_id: s11.id, user_id: u1.id, data_type: 'Anecdotal Note', comment: 'FILL IN')
d5 = Datum.create!(student_id: s10.id, user_id: u2.id, data_type: 'Behavior Antecedent Chart', comment: 'FILL IN' )
d6 = Datum.create!(student_id: s9.id, user_id: u2.id, data_type: 'Running Record', comment: 'FILL THIS SHIT IN')
d7 = Datum.create!(student_id: s8.id, user_id: u2.id, data_type: 'Checklist', comment: 'FILL TYPE IN')
d8 = Datum.create!(student_id: s7.id, user_id: u3.id, data_type: 'IEP Goal', comment: 'FILL IN')
d9 = Datum.create!(student_id: s5.id, user_id: u3.id, data_type: 'Anecdotal Note', comment: 'FILL IN')
d10 = Datum.create!(student_id: s6.id, user_id: u3.id, data_type: 'Behavior Antecedent Chart', comment: 'FILL IN' )

 
puts 'done seeding 🧟‍♂️'
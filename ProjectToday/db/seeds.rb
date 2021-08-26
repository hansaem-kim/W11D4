# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.delete_all

t1 = Todo.create(title: "workout", body: "now", done: false)
t2 = Todo.create(title: "eat   ", body: "food", done: false)
t3 = Todo.create(title: "drive", body: "to work", done: false)
t4 = Todo.create(title: "brush", body: "teeth", done: false)
t5 = Todo.create(title: "pet", body: "cat", done: true)
t6 = Todo.create(title: "jump", body: "now", done: false)
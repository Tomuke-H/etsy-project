# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Seller.destroy_all

categories = [
    'Food',
    'Travel',
    'Entertainment',
    'Furniture',
    'Clothes'
]

10.times do
    s = Seller.create(name: Faker::Name.name, email: Faker::Internet.email)
    5.times do
        num_categories = rand(0..categories.length - 1);
        s.buyers.create(
            name: Faker::Name.name, 
            max_price: rand(300), 
            desired_categories: categories.sample(num_categories), 
            seller_id: s.id
        )
    end

    5.times do
        s.products.create(price: rand(250), 
        description: Faker::Movies::HarryPotter.quote, 
        category: categories[rand(categories.length)],
        seller_id: s.id
    )
    end

end

puts "Seeded #{Seller.all.size} Sellers"
puts "Seeded #{Buyer.all.size} Buyers"
puts "Seeded #{Product.all.size} Products"

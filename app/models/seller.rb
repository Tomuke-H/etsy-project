class Seller < ApplicationRecord
    has_many :buyers
    has_many :products
end

class Product < ApplicationRecord
  belongs_to :seller


# SELECT s.name, p.category, p.description, p.price 
# FROM sellers AS s 
# INNER JOIN products AS p ON p.seller_id=s.id
# ORDER BY s.id

  def self.products_by_seller
    select('s.name, p.category, p.description, p.price, s.id AS seller_id')
    .from('sellers AS s ')
    .joins('INNER JOIN products AS p ON p.seller_id=s.id')
    .order('s.id')
  end

  def self.sellers
    select("DISTINCT name")
    .from('sellers')
  end

  def self.by_seller(seller)
    select('s.name, p.category, p.description, p.price')
    .from('sellers AS s ')
    .joins('INNER JOIN products AS p ON p.seller_id=s.id')
    .where('s.name = ?', seller)
    # .where("LOWER(p.seller') = ?", seller.downcase)
  end
end

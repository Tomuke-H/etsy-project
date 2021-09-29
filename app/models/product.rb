class Product < ApplicationRecord
  belongs_to :seller


#   SELECT s.name, p.category, p.description, p.price 
# FROM sellers AS s 
# INNER JOIN products AS p ON p.seller_id=s.id
# ORDER BY s.id

  def self.products_by_seller
    select('s.name, p.category, p.description, p.price, s.id AS seller_id')
    .from('sellers AS s ')
    .joins('INNER JOIN products AS p ON p.seller_id=s.id')
    .order('s.id')
  end

  def self.by_category(category)
    select('p.price, p.description, s.name, p.category')
    .from('products AS p')
    .joins('INNER JOIN sellers AS s ON s.id=p.seller_id')
    .where('p.category = ?', category)
  end


end

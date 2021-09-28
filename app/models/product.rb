class Product < ApplicationRecord
  belongs_to :seller


#   SELECT s.name, p.category, p.description, p.price 
# FROM sellers AS s 
# INNER JOIN products AS p ON p.seller_id=s.id
# ORDER BY s.id

  def self.products_by_seller
    select('s.name, p.category, p.description, p.price, p.id')
    .from('sellers AS s ')
    .joins('INNER JOIN products AS p ON p.seller_id=s.id')
    .order('s.id')
  end

end

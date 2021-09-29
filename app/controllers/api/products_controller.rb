class Api::ProductsController < ApplicationController

    def index
        render json: Product.products_by_seller
    end

    def avg_price
        render json: Product.avg_price_by_category
    end

end

class Api::ProductsController < ApplicationController

    def index
        render json: Product.products_by_seller
    end

    def avg_price
        render json: Product.avg_price_by_category
    end

    def avg_products
        render json: Product.avg_products
    end

    def sellers
        render json: Product.sellers
    end

    def seller
        # need to pass city data from front end
        render json: Product.by_seller(params[:seller])
    end
    def category
        products = Product.by_category(params[:category])
        render json: { products: products }
    end


end

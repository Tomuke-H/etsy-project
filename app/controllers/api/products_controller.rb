class Api::ProductsController < ApplicationController

    def index
        render json: Product.products_by_seller
    end

    def sellers
        render json: Product.sellers
    end

    def seller
        # need to pass city data from front end
        render json: Product.by_seller(params[:seller])
    end
end

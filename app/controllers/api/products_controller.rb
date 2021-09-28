class Api::ProductsController < ApplicationController

    def index
        render json: Product.products_by_seller
    end

end

class Api::ProductsController < ApplicationController

    def index
        render json: Product.products_by_seller
    end

    def category
        products = Product.by_category(params[:category])
        render json: { products: products }
    end


end

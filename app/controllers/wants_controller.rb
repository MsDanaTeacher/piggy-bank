class WantsController < ApplicationController

    def index
        render json: Want.where(:user_id => (params[:user_id]))
    end
    # Client.where("orders_count = ?", params[:orders])

    def create
        render json: Want.create!(user_id: params[:user_id], purchased: params[:purchased], price: params[:price], date: params[:date])
    end
end

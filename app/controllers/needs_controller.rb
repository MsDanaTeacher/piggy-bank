class NeedsController < ApplicationController

    def index
        needs = Need.all
        render json: needs
    end

    def create
        need = Need.create!(user_id: params[:user_id], purchased: params[:purchased], price: params[:price], date: params[:date])
        render json: need
    end
end

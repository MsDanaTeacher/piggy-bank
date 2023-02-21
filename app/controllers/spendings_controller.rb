class SpendingsController < ApplicationController
    def index
        spendings = Spending.all
        render json: spendings
    end

    
    def show
        render json: Spending.find(params[:id])
    end

    
    def create 
        spending = Spending.create!(user_id: params[:user_id], reflection: params[:reflection], budget: params[:budget], date: params[:date])
        render json: spending, status: :created
    end

    private

    def spending_params
        params.permit(:reflection, :budget, :date)
    end
end

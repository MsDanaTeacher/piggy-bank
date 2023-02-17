
class UsersController < ApplicationController
    before_action :authorized, only: [:show]

    def create #for signup
        #user instance is created:
        @user = User.create!(user_params)
        #if its valid, a payload object is created with the user
        #instance's ID and passed into the encode_token method, which
        #is defined in the Application Controller. 
        
            token = JWT.encode({user_id: @user.id}, 'secret_key')
            render json: { user: @user, token: token }, status: :created
    end

    #authenticated user can access their profile information:
    def show #for /me
        #@current_user comes from application_controller
        render json: { user: @current_user }, status: :accepted
    end

    def logout
        @current_user = nil
        head :no_content
    end

    def login #for /login
        #find by username from body
        @user = User.find_by(username: params[:username])
        #check if user exists and password matches password digest
        if(@user && @user.authenticate(params[:password]))
            #create token for front end 
            token = JWT.encode({user_id: @user.id}, 'secret_key')
            #pass user instance and token to front end
            render json: {user: @user, token: token}
        end
    end

    private

    def user_params
        params.permit(:username, :password, :avatar)
    end
end

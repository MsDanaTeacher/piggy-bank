
class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    #authenticated user can access their profile information:
    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def create
        #user instance is created:
        @user = User.create(user_params)
        #if its valid, a payload object is created with the user
        #instance's ID and passed into the encode_token method, which
        #is defined in the Application Controller. 
        if @user.valid?
            @token = encode_token({ user_id: @user.id })
            render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        else
            render json: { error: 'failed to create user' }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :password, :avatar)
    end
end

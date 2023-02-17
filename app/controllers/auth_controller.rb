# class AuthController < ApplicationController
#     #an already existing user logging back in. In both cases, our server needs to issue a new token.
#     skip_before_action :authorized, only: [:create]

#     def create
#         @user = User.find_by(username: user_login_params[:username])
#         #User#authenticate comes from BCrypt
#         if @user && @user.authenticate(user_login_params[:password])
#             # encode token comes from ApplicationController
#             token = encode_token({ user_id: @user.id })
#             render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
#         else
#             render json: { message: 'Invalid username or password' }, status: :unauthorized
#         end
#     end

#     private

#     def user_login_params
#         # params { user: {username: 'Chandler Bing', password: 'hi' } }
#         params.permit(:username, :password)
#     end
# end

#We can simply call our ApplicationController#encode_token
#This is an external link. method, passing the found user's ID in a payload. The newly 
#created JWT can then be passed back along with the user's data. The user data can be stored in our application's state, e.g., React
#This is an external link. or Redux
#This is an external link., while the token can be stored client-side (similar to our signup feature).
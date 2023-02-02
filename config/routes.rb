Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  #since Rails is handling the routing logic, it will look for routes defined in the config/routes.rb file to determine how to handle all requests
  #We can solve this problem by setting up a custom route in our Rails application, and handle any requests that come through that aren't requests for our API routes by returning the public/index.html file instead.
  #the method below handles all other GET requests by sending
  #them to a special FallbackController with an index action:
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
  # Defines the root path route ("/")
  root "users#index"
  # get '/users', to: 'users#index'
  # get '/hello', to: 'application#hello_world'
end
#all the routes for our api are defined FIRST in the routes.rb file. 

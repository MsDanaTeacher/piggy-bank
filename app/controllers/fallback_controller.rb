class FallbackController < ActionController::Base
    def index
        render file: 'public/index.html'
    end
end

#this action has one job: to render the HTML file for our React application. 
#The fallback controller must inherit from ActionContoller::Base in order to
#render HTML
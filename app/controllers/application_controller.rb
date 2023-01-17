class ApplicationController < ActionController::API
    include ActionController::Cookies

    def login
        user_to_find_to_login= User.find_by(params[:username])
      
        if user_to_find_to_login
      
          if user_to_find_to_login.authenticate(params[:password])
            render json: user_to_find_login
          else
            render json: {error: 'Check Your Password'}
          end
      
        else
          render json: {error: 'Username OR Password Do Not Match' }
      
        end
      
      end
      
          # def hello_world
          #     session[:count] = (session[:count] || 0) + 1
          #     render json: { count: session[:count] }
          #   end
end

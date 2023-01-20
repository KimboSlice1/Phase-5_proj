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
      
      def create

        user_to_find_to_login = User.find_by(username:params[:username])
  
        if user_to_find_to_login && user_to_find_to_login.authenticate(params[:password])
            render json: user_to_find_to_login, status: :ok
        else
        render json: {errors: 'Invalid Password or Username'}, status: :unauthorized 
  
        cookies[:user_id] = { value: user.id, expires: 1.year.from_now }
        
        end
      end
          # def hello_world
          #     session[:count] = (session[:count] || 0) + 1
          #     render json: { count: session[:count] }
          #   end
end

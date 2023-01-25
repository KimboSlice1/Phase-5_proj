class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize_user

    def check_user_in_session
        user_already_loggedin = User.find_by(id: session[:user_id])

        render json: user_already_loggedin
    end
     

    def authorize_user
       return render json: {error: 'No homie'}, status: :unauthorized unless check_user_in_session
    end
    # def login

    #   # debugger 

    #     user_to_find_to_login= User.find_by(params[:username])
      
    #     if user_to_find_to_login
      
    #       if user_to_find_to_login.authenticate(params[:password])
    #         render json: user_to_find_login
    #       else
    #         render json: {error: 'Check Your Password'}
    #       end
      
    #     else
    #       render json: {error: 'Username OR Password Do Not Match' }
      
    #     end
    # end


      
      
    #   def create

    #     user_to_find_to_login = User.find_by(username:params[:username])
  
    #     if user_to_find_to_login && user_to_find_to_login.authenticate(params[:password])

    #       # debugger

    #         render json: user_to_find_to_login, status: :ok
    #     else

    #       # debugger

    #     render json: {errors: 'Invalid Password or Username'}, status: :unauthorized 
  
    #     # cookies[:user_id] = { value: user.id, expires: 1.year.from_now }
        
    #     end
    #   end
          # def hello_world
          #     session[:count] = (session[:count] || 0) + 1
          #     render json: { count: session[:count] }
          #   end
end

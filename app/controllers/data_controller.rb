class DataController < ApplicationController

def index
    render json: Datum.all
end

def show
    data_found = Datum.find_by_id(params[:id])
    if data_found 
        render json: data_found
    else
        render json: {'error': 'Data Not Found'}, status: :not_found
    end
end

def create
    new_data = Datum.create!
    (data_params)
    if new_data.valid?
        render json: new_data, status: :created
    else
        render json: {'error': new_data.errors.full_messages}, status: :unprocessable_entity
    end
end



# Add update and destroy?? 

    def data_params 
        params.permit( :student_id, :user_id, :data_type, :comment)
    end
end


class StudentsController < ApplicationController


    def index
        render json: Student.all
    end

    def show 
        student_found = Student.find_by_id(params[:id])
        if student_found
            render json: student_found
        else
            render json: {"error": "Student not found"}, status: :not_found
        end
    end

    def create
        # byebug
        new_student = Student.create!(student_params)

        if new_student.valid?
            render json: new_student, status: :created
        else
            render json: {"error": new_student.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy 
        found_student = Student.find_by_id(params[:id])
        if found_student
            found_student.destroy
            head :no_content
        else
            render json: {"errors": "Student not found"}, status: :not_found
        end
    end

    def update
        found_student = Student.find_by_id(params[:id])
        if found_student.update!(student_params)
            render json: found_student, status: :ok
        else
            render json: found_student.error, status: :unprocessable_entity
        end
    end
        








    private ####

    def student_params 
        params.permit( :name)
    end


end



class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(photo_id: params[:photo_id])
  end

  def show
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    debugger;
    @comment = Comment.find(params[:id])

    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :photo_id)
  end

end

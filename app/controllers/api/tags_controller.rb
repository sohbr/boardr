class Api::TagsController < ApplicationController
  def index
    @tags = Photo.find_by(id: params[:photo_id]).tags
  end

  def show
  end

  def update
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])

    if @tag.destroy
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:word, :photo_id)
  end

end

class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.where(owner_id: params[:user_id])
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.owner_id = current_user.id

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def update

    @photo = current_user.photos.find(params[:id])
    if @photo.update_attributes(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 401
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url, :title, :description)
  end

end

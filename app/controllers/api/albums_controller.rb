class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.where(ownername: params[:user_id])
  end

  def show
    @album = Album.find(params[:id])

    if @album
      render :show
    else
      render json @album.errors.full_messages, status: 401
    end
  end

  def create
    @album = Album.new(album_params)
    @album.ownername = current_user.username

    if @album.save
      render :show
    else
      render json @album.errors.full_messages, status: 422
    end
  end

  def update
    @album = current_user.albums.find(params[:id])

    if @album.update_attributes(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 401
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy
    render :show
  end

  private

  def album_params
  params.require(:album).permit(:title, :description, :photo_id)
  end
end

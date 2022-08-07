import fetchData from "./fetchData";
import * as Constants from '../constants/index';

export const getAllPhotos = () => {
    return fetchData(`${Constants.PHOTOS_API_URL}?_limit=20`);
}

export const getPhotoDetails = (id) => {
    return fetchData(`${Constants.PHOTOS_API_URL}/${id}`);
}

export const getAlbumDetails = (id) => {
    return fetchData(`${Constants.ALBUMS_API_URL}/${id}`);
}

export const getUserDetails = (id) => {
    return fetchData(`${Constants.USERS_API_URL}/${id}`);
}

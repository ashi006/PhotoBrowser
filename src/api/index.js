import fetchData from "./fetchData";
import * as Constants from '../constants/index';

export const getAllPhotos = (pageNumber) => {
    return fetchData(`${Constants.PHOTOS_API_URL}?_page=${pageNumber}&_limit=${Constants.PAGE_LIMIT}`);
}

export const getAllAlbums = (pageNumber) => {
    return fetchData(`${Constants.ALBUMS_API_URL}?_page=${pageNumber}&_limit=${Constants.PAGE_LIMIT}`);
}

export const getAllUsers = (pageNumber) => {
    return fetchData(`${Constants.USERS_API_URL}?_page=${pageNumber}&_limit=${Constants.PAGE_LIMIT}`);
}

export const getUserAlbums = (id, pageNumber) => {
    return fetchData(`${Constants.USERS_API_URL}/${id}/albums?_page=${pageNumber}&_limit=${Constants.PAGE_LIMIT}`);
}

export const getAlbumPhotos = (id, pageNumber) => {
    return fetchData(`${Constants.ALBUMS_API_URL}/${id}/photos?_page=${pageNumber}&_limit=${Constants.PAGE_LIMIT}`);
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

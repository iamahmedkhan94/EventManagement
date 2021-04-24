import * as TYPES from '../types';

//Email Validation Action
export const addRequest = (
  title: string,
  description: string,
  date: string,
  listType: string,
  nav: object,
) => {
  return {
    type: TYPES.ADDLISTITEM_REQUEST_REQUEST,
    title,
    description,
    date,
    listType,
    nav,
  };
};

//Email Validation Action
export const deleteRequest = (item: object) => {
  return {
    type: TYPES.DELETE_REQUEST_REQUEST,
    item,
  };
};
//Email Validation Action
export const updateRequest = (
  title: string,
  description: string,
  date: string,
  listType: string,
  nav: object,
) => {
  return {
    type: TYPES.UPDATE_REQUEST_REQUEST,
    title,
    description,
    date,
    listType,
    nav,
  };
};

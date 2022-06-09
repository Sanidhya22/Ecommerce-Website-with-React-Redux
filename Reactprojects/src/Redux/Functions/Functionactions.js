import * as actionTypes from "./FunctionTypes";

export const addToCart = (itemID) => {
 
  return {
    
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const placeOrder= (item,ta) => {
  return {
    type: actionTypes.Place_Order,
    payload:{
      cart:item,
      amount:ta
    }
  };
};

export const removeQty= (id) => {
  
  return {
    type: actionTypes.Remove_Qty,
    payload: {
      id:id
    },
  };
};

export const fetchdb= (Items) => {
  return {
    type: actionTypes.Fetch_Db,
    payload: {
      items:Items
    },
  };
};

export const setTitle= (str) => {
  return {
    type: actionTypes.Set_Title,
    payload: {
      name:str
    },
  };

};

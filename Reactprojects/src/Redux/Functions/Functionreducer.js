import * as actionTypes from "./FunctionTypes";

const INITIAL_STATE = {
  products: [],
  cart: [],
  orders:[],
  currentItem: null,
  Title:"",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      
      const item = state.products.find(
        (product) => product.isbn === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.isbn === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.isbn === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
      
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.isbn !== action.payload.id),
      };
  
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    case actionTypes.Set_Title:
      return {
        ...state,
        Title: action.payload.name,
      };
      
    case actionTypes.Fetch_Db:
      return {
        ...state,
        products: action.payload.items,
      };

    case actionTypes.Place_Order:
     return {
        ...state,
        orders:[...state.orders, [...state.cart]],
        cart:[]
      };

    case actionTypes.Remove_Qty:
        const exist =state.cart.find(x =>x.isbn=== action.payload.id);
        
      return {
        ...state,
        cart:exist.qty===1 ?(state.cart.filter((x)=>x.isbn!==action.payload.id))
        :(state.cart.map(x=>x.isbn === action.payload.id ? {...exist,qty:exist.qty-1}:x))
      }
      
    default:
      return state;
  }
};

export default shopReducer;

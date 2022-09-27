const INITIAL_STATE = {
    productList : []
}
const OrderListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_ORDERLIST":
            return {
                ...state,
                productList : [ ...action.value ],
            };

        default:
            return state;
    }
}


export default OrderListReducer;

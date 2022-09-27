const INITIAL_STATE = {
    productList : [
      {
        productTitle: "The Rough Wood",
        productID: "2A6079S",
        productCategory: "wood",
        productPrice: "$89",
        productQuantity: "5",
        productImage: "/images/shop/img1.jpg",
        productImage1: "",
        productImage2: "",
        productImage3: "",
        productDesc: "",
        productAssemblyInstructionion: "",
        id: 1,
      },
      {
        productTitle: "The Night glar Wood",
        productID: "2A6071S",
        productCategory: "Glar wood",
        productPrice: "$87",
        productQuantity: "5",
        productImage: "/images/shop/img2.jpg",
        productImage1: "",
        productImage2: "",
        productImage3: "",
        productDesc: "",
        productAssemblyInstruction: "",
        id: 2,
      },
      ]
}

const CardProductList = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_CART_ORDERLIST":
            return {
                ...state,
                productList : [ ...state.productList , ...action.value ],
            };

        default:
            return state;
    }
}


export default CardProductList;

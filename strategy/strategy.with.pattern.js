function preOrderPrice(originalPrice) {
    return originalPrice * 0.8;
}
function promotionPrice(originalPrice) {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}
function blackFridayPrice(originalPrice) {
    return originalPrice > 200 ? originalPrice * 0.8 : originalPrice - 50;
}
function defaultPrice(originalPrice) {
    return originalPrice;
}

// function getPrice(originalPrice, typePromotion = "default") {
//     if (typePromotion === "preOrder") {
//         return preOrderPrice(originalPrice);
//     }
//     if (typePromotion === "promotion") {
//         return promotionPrice(originalPrice);
//     }
//     if (typePromotion === "blackFriday") {
//         return blackFridayPrice(originalPrice);
//     }
//     if (typePromotion === "default") {
//         return defaultPrice(originalPrice);
//     }
// }

const getPriceStrategies = {
    preOrder: preOrderPrice,
    promotion: promotionPrice,
    blackFriday: blackFridayPrice,
    default: defaultPrice,
};

function getPrice(originalPrice, typePromotion) {
    if (getPriceStrategies.hasOwnProperty(typePromotion))
        return getPriceStrategies[typePromotion](originalPrice);
    return getPriceStrategies["default"](originalPrice);
}

console.log(getPrice(200, "blackFrisday"));

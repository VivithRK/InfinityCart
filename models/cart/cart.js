const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    product_id: {
        type: String,
        required: true,
    },
    total_amount: {
        type: String,
        required: true,
    }
}
    ,
    {
        timestamps: true
    }

);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
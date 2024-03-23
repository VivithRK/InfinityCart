const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    order_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true,
    },
    total_amount: {
        type: Number,
        required: true,
    },
    order_date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },

}
    ,
    {
        timestamps: true
    }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
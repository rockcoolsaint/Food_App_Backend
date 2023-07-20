import mongoose, { Schema, Document, Model } from 'mongoose';


export interface OrderDoc extends Document {

    orderId: string;
    vendorId: string;
    items: [any];
    totalAmount: number;
    paidAmount: number;
    orderDate: Date;
    paidThrough: string; // COD //CARD // Net Banking // Wallet
    paymentResponse: string; // { Long response object for charge back scenario}
    orderStatus: string; // To determine the current status // waiting // FAILED // ACCEPT // REJECT // UNDER-PROCESS // READY
    remarks: string;
    deliveryId: string;
    appliedOffers: boolean;
    offerId: string;
    readyTime: number; // max 60 minutes
}


const OrderSchema = new Schema({
    orderId: {type: String, require: true},
    vendorId: {type: String, require: true},
    items: [
        {
            food: {type: Schema.Types.ObjectId, ref: "food", require: true},
            unit: { type: Number, require: true}
        }
    ],
    totalAmount: {type: Number, require: true},
    paidAmount: {type: Number, require: true},
    orderDate: {type: Date },
    paidThrough: {type: String}, // COD //CARD // Net Banking // Wallet
    PaymentResponse: {
        type: String,
    },
    orderStatus: {type: String},
    remarks: {type: String},
    deliveryId: {type: String},
    readyTime:{type: Number},
     
},{
    toJSON: {
        transform(doc, ret){
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;

        }
    },
    timestamps: true
});


const Order = mongoose.model<OrderDoc>('order', OrderSchema);

export { Order }
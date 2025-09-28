import mongoose from "mongoose";

const schedulingSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    hour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hour",
        required: true
    },

}, {
    timestamps: true
});

const Scheduling = mongoose.model("Scheduling", schedulingSchema);

export default Scheduling;  
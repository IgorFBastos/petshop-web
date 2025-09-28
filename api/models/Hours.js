import mongoose from "mongoose";

const hourSchema = new mongoose.Schema({
    weekday: {
        type: String,
        required: true,
        enum: ["1", "2", "3", "4", "5", "6"]
    },
    hour: {
        type: String,
        required: true
    },
    limit: {
        type: Number,
        required: true
    }
});

const Hour = mongoose.model("Hour", hourSchema);

export default Hour;
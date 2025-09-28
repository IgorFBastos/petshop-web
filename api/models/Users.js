import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        require: true,
        enum: ["admin", "client", "employee"],
        default: "client",
    }
});


const Users = mongoose.model("Client", clientSchema);

export default Users;
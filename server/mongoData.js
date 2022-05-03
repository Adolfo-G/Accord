// import mongoose from "mongoose";
const mongoose = require('mongoose');

const accordSchema = mongoose.Schema({
    channelName: String,
    conversation: [
        {
            message: String,
            timestamp: String,
            user: {
                displayName: String,
                email: String,
                photo: String,
                uid: String
            }
        }
    ]
});

// export default mongoose.model('conversations', accordSchema);
module.exports = mongoose.model('conversations', accordSchema);
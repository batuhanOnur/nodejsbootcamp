const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name con not be more than 50 char']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a desc'],
        maxlength: [500, 'Desc con not be more than 500 char']
    },
    website: {
        type: String,
        match: [
            /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
            'Please use a valid URL with HTTP or HTTPS'
        ]
    },

    phone: {
        type: String,
        maxlength: [20, 'cannot be more than 20']
    },

    email: {
        type: String,
        match: [
            /^\w([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please use a valid email'
        ]
    },

    adress: {
        type: String,
        required: [false, 'Please add an adress']
    },

    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: false
        },
        coordinates: {
            type: [Number],
            required: false,
            index: '2dsphere'
        },
        formattedAdress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },

    careers: {
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },

    averageRating: {
        type: Number,
        min: [1, 'rating must be at least 1'],
        max: [10, 'rating must can not be more than 10']
    },

    averageCost: Number,

    photo: {
        type: String,
        default: 'np-photo.jpg'
    },

    housing: {
        type: Boolean,
        default: false
    },

    jobAssistance: {
        type: Boolean,
        default: false
    },

    jobGuarantee: {
        type: Boolean,
        default: false
    },

    acceptGi: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
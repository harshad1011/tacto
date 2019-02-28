var zipcodes = require('zipcodes');

var schema = new Schema({
    area: String,
    city: {
        type: String,
        index: true
    },
    state: {
        type: String,
        index: true
    },
    country: {
        type: String,
        index: true
    },
    pincode: {
        type: String,
        index: true
    }
});

module.exports = mongoose.model("Address", schema);

var functions = {
    getZip: function (address, res) {
        if (!address.city || !address.state || !address.country) {
            return res.status(422).json({
                error: "Insufficient arguments passed"
            });
        }

        Address.findOne({
            city: address.city,
            state: address.state,
            country: address.country
        }, {
            pincode: 1
        }).exec((err, address) => {
            if (address) {
                res.status(200).json(address.pincode);
            }
        });
    },
    getAddress: function (address, res) {
        if (!address.pincode) {
            return res.status(422).json({
                error: "Insufficient arguments passed"
            });
        }

        var returnedAddress = zipcodes.lookup(address.pincode);

        res.status(200).json(returnedAddress);
    },
    getCountries: function (res) {
        Address.distinct('country').exec((err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.status(422).json(err);
            }
        });
    },
    getStatesByCountry: function (addr, res) {
        if (!addr.country) {
            return res.status(422).json({
                error: "Insufficient arguments passed"
            });
        }

        Address.distinct('state', {
            country: addr.country
        }).exec((err, states) => res.status(200).json(states));
    },
    getCitiesByState: function (addr, res) {
        if (!addr.state) {
            return res.status(422).json({
                error: "Insufficient arguments passed"
            });
        }

        Address.distinct('city', {
            state: addr.state
        }).exec((err, cities) => res.status(200).json(cities));
    }
};

module.exports = Object.assign(module.exports, functions);
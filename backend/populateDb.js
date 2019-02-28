var addresses = [{
    area: "Dadar",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "400033"
}, {
    area: "kandivali",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "400102"
}, {
    area: "churchgate",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "400001"
}, {
    area: "lower parel",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "400022"
}, {
    area: "wadala",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "400031"
}, {
    area: "cotton green",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "400066"
}, {
    area: "malad",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "400073"
}, {
    area: "goregaon",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "400071"
}, {
    area: "Virar",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "400241"
}, {
    area: "andheri",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "400051"
}, {
    area: "washington",
    city: "Washington DC",
    state: "Washington",
    country: "US",
    pincode: "20027"
}, {
    area: "An der welle",
    city: "Frankfurt",
    state: "Frankfurt",
    country: "Germany",
    pincode: "60322"
}, {
    area: "places de burgues",
    city: "Geneva",
    state: "state of geneva",
    country: "Switzerland",
    pincode: "28"
}];

for (let i = 0; i < addresses.length; i++) {
    Address.findOneAndUpdate({
        area: addresses[i].area
    }, addresses[i], {
        upsert: true
    }).exec();
}
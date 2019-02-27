var addresses = [{
    area: "Dadar",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipcode: "400033"
}, {
    area: "kandivali",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipcode: "400102"
}, {
    area: "churchgate",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipcode: "400001"
}, {
    area: "lower parel",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipcode: "400022"
}, {
    area: "wadala",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipcode: "400031"
}, {
    area: "cotton green",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipcode: "400066"
}, {
    area: "malad",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipcode: "400073"
}, {
    area: "goregaon",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipcode: "400071"
}, {
    area: "Virar",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipcode: "400241"
}, {
    area: "andheri",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    zipcode: "400051"
}];

for (let i = 0; i < addresses.length; i++) {
    Address.findOneAndUpdate({
        area: addr.area
    }, addresses[i]).exec();
}
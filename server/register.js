//static
Meteor.publish('register', function (id) {
    //Waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Register.find({_id: id});
    return data;
});

////Dynamic
//Meteor.publish('subject', function(selector){
//    //Waiting
//    Meteor._sleepForMs(1000);
//
//    let data = Collection.Subject.find(selector);
//    return data;
//});
Meteor.publish('registers', function () {
    return Collection.Register.find();

});
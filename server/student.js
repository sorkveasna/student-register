////static
//Meteor.publish('studentById', function(id){
//    //Waiting
//    Meteor._sleepForMs(1000);
//
//    let data = Collection.Student.find({_id: id});
//    return data;
//});

//Dynamic
Meteor.publish('student', function(selector){
    //Waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Student.find(selector);
    return data;
});

Meteor.publish('students', function(){
    return Collection.Student.find();
});
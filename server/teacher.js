////static
//Meteor.publish('teacherById', function(id){
//    //Waiting
//    Meteor._sleepForMs(1000);
//
//    let data = Collection.Teacher.find({_id: id});
//    return data;
//});
//
//Dynamic
Meteor.publish('teacher', function(selector){
    //Waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Teacher.find(selector);
    return data;
});


Meteor.publish('teachers', function(){
    return Collection.Teacher.find();
});
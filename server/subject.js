////static
//Meteor.publish('subjectById', function(id){
//    //Waiting
//    Meteor._sleepForMs(1000);
//
//    let data = Collection.Subject.find({_id: id});
//    return data;
//});

//Dynamic
Meteor.publish('subject', function(selector){
    //Waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Subject.find(selector);
    return data;
});


Meteor.publish('subjects', function(){
    return Collection.Subject.find();
});
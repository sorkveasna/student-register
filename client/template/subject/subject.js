//subjectAction
Template.subjectAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('subjectUpdate', {id: this._id});// url??
    },
    'click .jsRemove': function () {
        Collection.Subject.remove({_id: this._id}); /// remove by _id?
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm('Do you want to delete the record?',
            function () {
                Collection.Subject.remove({_id: self._id});
                alertify.success('Deleted!');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});


AutoForm.hooks({
    subjectInsert: { //id autoform
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Subject, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            alertify.alert('Successfully Added!');
            FlowRouter.go('subject');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    },
    subjectUpdate: { //id autoform
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Subject, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            alertify.alert('Successfully Updated!');
            FlowRouter.go('subject');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }
});

////Update
//Template.subjectUpdate.onCreated(function(){
//    let subjectId= FlowRouter.getParam("id");
//    //let selector={_id: subjectId}; //dynamic
//    //console.log(subjectId);
//    //let selector={}; //find all
//
//    this.subscribe("subjectById", subjectId);
//});

Template.subjectUpdate.helpers({
    subjectDoc(){
        let subjectId = FlowRouter.getParam("id");
        let subject = Collection.Subject.findOne(subjectId); //{}
        return subject;
    }
});
//RegisterAction
Template.registerAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('registerUpdate', {id: this._id});// url??
    },
    'click .jsRemove': function () {
        Collection.Register.remove({_id: this._id}); /// remove by _id?
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm('Do you want to delete the record?',
            function () {
                Collection.Register.remove({_id: self._id});
                alertify.success('Deleted!');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});


AutoForm.hooks({
    registerInsert: { //id autoform
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Register, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            alertify.alert('Successfully Added!');
            FlowRouter.go('register');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    },
    registerUpdate: { //id autoform
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Register, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            alertify.alert('Successfully Updated!');
            FlowRouter.go('register');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }
});

////Update
//Template.registerUpdate.onCreated(function(){
//    let registerId= FlowRouter.getParam("id");
//    //let selector={_id: subjectId}; //dynamic
//    //console.log(subjectId);
//    //let selector={}; //find all
//
//    this.subscribe("registerById", registerId);
//});

Template.registerUpdate.helpers({
    registerDoc(){
        let registerId = FlowRouter.getParam("id");
        let register = Collection.Register.findOne(registerId); //{}
        return register;
    }
});
//PaymentAction
Template.paymentAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('paymentUpdate', {id: this._id});// url??
    },
    'click .jsRemove': function () {
        Collection.Payment.remove({_id: this._id}); /// remove by _id?
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm('Do you want to delete the record?',
            function () {
                Collection.Payment.remove({_id: self._id});
                alertify.success('Deleted!');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});

AutoForm.hooks({
    paymentInsert: { //id autoform
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Payment, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            alertify.alert('Successfully Added!');
            FlowRouter.go('payment');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    },

    paymentUpdate: { //id autoform
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Payment, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            alertify.alert('Successfully Updated!');
            FlowRouter.go('payment');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }
});

////Update
//Template.paymentUpdate.onCreated(function () {
//    let paymentId = FlowRouter.getParam("id");
//    //let selector={_id: subjectId}; //dynamic
//    //console.log(subjectId);
//    //let selector={}; //find all
//    this.subscribe("paymentById", paymentId);
//});

Template.paymentUpdate.helpers({
    paymentDoc(){
        let paymentId = FlowRouter.getParam("id");
        let payment = Collection.Payment.findOne(paymentId); //{}
        return payment;
    }
});

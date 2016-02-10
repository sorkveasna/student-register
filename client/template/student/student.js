//Action
Template.studentAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('studentUpdate', {id: this._id});// url??
    },

    'click .jsRemove': function () {
        var self = this;

        new Confirmation({
            message: "Are you sure ?",
            title: "Confirmation",
            cancelText: "Cancel",
            okText: "Ok",
            success: false // wether the button should be green or red
        }, function (ok) {
            // ok is true if the user clicked on "ok", false otherwise
            if (ok) {
                Collection.Student.remove({_id: self._id}); /// remove by _id?
                Bert.alert({
                    title: 'Remove',
                    message: 'You have removed one document!',
                    type: 'danger',
                    style: 'growl-top-right',
                    icon: 'fa-trash'
                });
            }

        });
    }
});

Template.studentUpdate.helpers({
    studentDoc(){
        let studentId = FlowRouter.getParam("id");
        let student = Collection.Student.findOne(studentId); //{}
        //console.log(student);
        return student;
    }
});

AutoForm.hooks({
    studentInsert: { //id autoform
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Student, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            Bert.alert('Successfully Added', 'success', 'growl-top-right');
            FlowRouter.go('student');
        },
        onError(formType, error){
            Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },
    studentUpdate: {
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Subject, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            Bert.alert('Successfully Updated', 'success', 'growl-top-right');
            FlowRouter.go('student');
        },
        onError(formType, error){
            Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    }
});
//Action
Template.teacherAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('teacherUpdate', {id: this._id});// url??
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
                Collection.Teacher.remove({_id: self._id}); /// remove by _id?
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

////Update
//Template.teacherUpdate.onCreated(function(){
//    let teacherId= FlowRouter.getParam("id");
//    //let selector={_id: subjectId}; //dynamic
//    //console.log(subjectId);
//    //let selector={}; //find all
//
//    this.subscribe("teacherById", teacherId);
//});

Template.teacherUpdate.helpers({
    teacherDoc(){
        let teacherId = FlowRouter.getParam("id");
        let teacher = Collection.Teacher.findOne(teacherId); //{}
        //console.log(teacher);
        return teacher;
    }
});

AutoForm.hooks({
    teacherInsert: { //id autoform
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Teacher, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            Bert.alert('Successfully Added', 'success', 'growl-top-right');
            FlowRouter.go('teacher');
        },
        onError(formType, error){
            Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },
    teacherUpdate: {
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Teacher, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            Bert.alert('Successfully Updated', 'success', 'growl-top-right');
            FlowRouter.go('teacher');
        },
        onError(formType, error){
            Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    }
});
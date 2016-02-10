//Generate
Template.registerReportGen.helpers({
    data(){
        let data = {};
        let dateFrom = FlowRouter.getQueryParam('dateFrom');
        dateFrom = moment(dateFrom).toDate();
        let dateTo = FlowRouter.getQueryParam('dateTo');
        dateTo = moment(dateTo).toDate();
        //header
        data.header = {
            repDate: moment(dateFrom).format('DD/MM/YYYY') + '-' + moment(dateTo).format('DD/MM/YYYY')
        };
        //end Header
        let selector = {
            regDate: {$gte: dateFrom, $lte: dateTo}
        };
        let option = {$sort: {regDate: 1}};
        let tempContent = Collection.Register.find(selector, option);
        let content = [];

        tempContent.forEach(function (obj) {
            //find Student
            let studentDoc = Collection.Student.findOne(obj.studentId);
            obj._student = studentDoc;

            //Find subject
            let subjectDoc = Collection.Subject.findOne(obj.subjectId);
            obj._subject = subjectDoc;

            content.push(obj);
        });

        data.content = content;
        console.log(data);

        return data;
    },
    no(index){
        //console.log(index);
        return index + 1;
    }
});

//hook
AutoForm.hooks({
    registerReport: {
        onSubmit(insertDoc, updateDoc, currentDoc){
            this.done(null, insertDoc);
        },
        onSuccess(formType, result){
            let query = result;
            let path = FlowRouter.path('registerReportGen', {}, query);

            window.open(path, '_blank');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }
});
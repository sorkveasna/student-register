//Generate
Template.paymentReportGen.helpers({
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
            paidDate: {$gte: dateFrom, $lte: dateTo}
        };
        let option = {$sort: {paidDate: 1}};
        let tempContent = Collection.Payment.find(selector, option);
        let content = [];

        tempContent.forEach(function (obj) {
            //find Student
            let studentDoc = Collection.Student.findOne(obj.studentId);
            obj._student = studentDoc;

            //Find subject
            let registerDoc = Collection.Register.findOne(obj.registerId);
            obj._register = registerDoc;

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
    paymentReport: {
        onSubmit(insertDoc, updateDoc, currentDoc){
            this.done(null, insertDoc);
        },
        onSuccess(formType, result){
            let query = result;
            let path = FlowRouter.path('paymentReportGen', {}, query);

            window.open(path, '_blank');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }
});
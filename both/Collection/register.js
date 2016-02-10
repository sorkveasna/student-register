Collection.Register = new Mongo.Collection('register'); //create a collection name 'teacher'
Schema.Register = new SimpleSchema({
    regDate: {
        type: Date,
        label: "Register Date",
        defaultValue: moment().toDate(),
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    pickTime: false,
                    format: 'MM/DD/YYYY'
                }
            }
        }
    },
    studyDay: {
        type: String,
        label: "Study Day",
        autoform: {
            type: "select2",
            options(){
                return [
                    {label: "(Select One)", value: ""},
                    {label: "WeekDay", value: "WeekDay"},
                    {label: "Weekend", value: "Weekend"}
                ]
            }
        }
    },
    subjectId: {
        type: String,
        label: "Subject ID",
        autoform: {
            type: "select2",
            options: function () {
                var data = Collection.Subject.find();
                var list = [
                    {label: '(Select One)', value: ''}
                ];
                data.forEach(function (obj){
                    list.push({label: obj._id + ' : ' + obj.name, value: obj._id})
                });
                return list;
            }
        }
    },
    studentId: {
        type: String,
        label: "Student ID",
        autoform: {
            type: "select2",
            options: function () {
                var data = Collection.Student.find();
                var list = [
                    {label: '(Select One)', value: ''}
                ];
                data.forEach(function (obj){
                    list.push({label: obj._id + ' : ' + obj.name, value: obj._id})
                });
                return list;
            }
        }
    },
    price: {
        type: Number,
        label: "Price",
        defaultValue: function(){
            let subjectId= AutoForm.getFieldValue('subjectId');
            let data = Collection.Subject.findOne(subjectId);

            if(data){
                return data.price;
            }
            return 0;
        },
        autoform:{
            readonly: true
        }
    },
    discount:{
        type: Number,
        label: "Discount"
    },
    amount: {
        type: Number,
        label: "Amount",
        decimal: true,
        defaultValue: function () {
            let price= AutoForm.getFieldValue('price');
            let discount= AutoForm.getFieldValue('discount');
            return price - discount;
        },
        autoform:{
            readonly:true
        }
    },
    teacherId:{
        type: String,
        label: "Teacher ID",
        autoform: {
            type: "select2",
            options: function () {
                var data = Collection.Teacher.find();
                var list = [
                    {label: '(Select One)', value: ''}
                ];
                data.forEach(function (obj){
                    list.push({label: obj._id + ' : ' + obj.name, value: obj._id})
                });
                return list;
            }
        }
    }
});
Collection.Register.attachSchema(Schema.Register);

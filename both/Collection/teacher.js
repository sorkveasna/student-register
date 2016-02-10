Collection.Teacher = new Mongo.Collection('teacher'); //create a collection name 'teacher'
Schema.Teacher = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type: "select2",
            options(){
                return [
                    {label: "(Select One)", value: ""},
                    {label: "Male", value: "Male"},
                    {label: "Female", value: "Female"}
                ]
            }
        }
    },
    datebirth: {
        type: Date,
        label: "Date of Birth",
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'YYYY/MM/DD',
                    pickTime: false
                }
            }
        }
    },
    telephone: {
        type: String,
        label: "Telephone",
        optional: true
    }
});
Collection.Teacher.attachSchema(Schema.Teacher);

Collection.Student = new Mongo.Collection('student'); //create a collection name 'student'
Schema.Student = new SimpleSchema({
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
Collection.Student.attachSchema(Schema.Student);

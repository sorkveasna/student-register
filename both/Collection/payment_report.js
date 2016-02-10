Schema.PaymentReport = new SimpleSchema({
    dateFrom: {
        type: Date,
        label: "From Date",
        defaultValue: moment().toDate(),
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    pickTime: false,
                    format: 'YYYY/MM/DD'
                }
            }
        }
    },
    dateTo: {
        type: Date,
        label: "To Date",
        defaultValue: moment().toDate(),
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    pickTime: false,
                    format: 'YYYY/MM/DD'
                }
            }
        }
    },
});

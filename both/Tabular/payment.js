TabularTables = {};

TabularTables.Payment = new Tabular.Table({
    name: "Payment",
    collection: Collection.Payment,
    columns: [
        {data: "_id", title: "ID"},
        {
            data: "paidDate",
            title: "Paid Date",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                }
                else
                {
                    return "Never";
                }
            }
        },
        {data: "studentId", title: "Student ID"},
        {data: "registerId", title: "Register ID"},
        {data: "dueAmount", title: "Due Amount"},
        {data: "paidAmount", title: "Paid Amount"},
        {data: "osAmount", title: "OS Amount"},
        {data: "voucherId", title: "Voucher ID"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.paymentAction
        }
    ]
});
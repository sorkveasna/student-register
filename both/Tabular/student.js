TabularTables = {};

TabularTables.Student = new Tabular.Table({
    name: "Student",
    collection: Collection.Student,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {
            title: "Date Of Birth",
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
{
            title: "Action",
            tmpl: Meteor.isClient && Template.studentAction
        }
    ]
});
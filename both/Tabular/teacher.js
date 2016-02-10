TabularTables = {};

TabularTables.Teacher = new Tabular.Table({
    name: "Teacher",
    collection: Collection.Teacher,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {
            data: "datebirth",
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
            tmpl: Meteor.isClient && Template.teacherAction
        }
    ]
});
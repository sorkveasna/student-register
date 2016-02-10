TabularTables = {};

TabularTables.Subject = new Tabular.Table({
    name: "Subject",
    collection: Collection.Subject,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Subject"},
        {data: "duration", title: "Duration"},
        {data: "price", title: "Price"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.subjectAction
        }
    ]
});
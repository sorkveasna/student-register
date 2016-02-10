Collection.Subject = new Mongo.Collection('subject');
Schema.Subject = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    duration: {
        type: Number,
        label: "Duration (Hour)"
    },
    price: {
        type: Number,
        label: "Price",
        decimal: true
    },
    des: {
        type: String,
        label: "Description"
    }
});
Collection.Subject.attachSchema(Schema.Subject);
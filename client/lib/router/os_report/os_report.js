
FlowRouter.route('/osReport/', {
    name: "osReport",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "osReport"});
    },
    breadcrumb:{
        title:'OS Report',
        parent:'home'
    }
});
//Report Generate
FlowRouter.route('/osReportGen/',{
    name: "osReportGen",
    action: function (params, queryParams) {
        BlazeLayout.render('OsReportLayout', {content:"osReportGen"});
    }
});
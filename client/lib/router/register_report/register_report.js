
FlowRouter.route('/registerReport/', {
    name: "registerReport",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "registerReport"});
    },
    breadcrumb:{
        title:'Register Report',
        parent:'home'
    }
});
//Report Generate
FlowRouter.route('/registerReportGen/',{
    name: "registerReportGen",
    action: function (params, queryParams) {
        BlazeLayout.render('RegisterReportLayout', {content:"registerReportGen"});
    }
});
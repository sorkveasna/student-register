
FlowRouter.route('/paymentReport/', {
    name: "paymentReport",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "paymentReport"});
    },
    breadcrumb:{
        title:'Payment Report',
        parent:'home'
    }
});
//Report Generate
FlowRouter.route('/paymentReportGen/',{
    name: "paymentReportGen",
    action: function (params, queryParams) {
        BlazeLayout.render('PaymentReportLayout', {content:"paymentReportGen"});
    }
});
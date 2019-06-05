/**
 * Created by Eleven on 16-01-2019.
 */
$(document).ready(function () {

});
var all = "testing-greensea testing-teal";
var $deviceLevelTesting = "" +
    "<div class='text-left'>" +
    "Device-level testing incorporates six key areas:- " +
    "<ul>" +
        "<li>System connectivity</li>" +
        "<li>Serial protocol</li>" +
        "<li>Capacities and properties of the device</li>" +
        "<li>Schedules</li>" +
        "<li>Power modes</li>" +
        "<li>OTA</li>" +
    "</ul>" +
    "</div>";

var $cloudLevelChecking = "" +
    "<div class='text-left'>" +
    "Cloud-level checking includes:- " +
    "<ul>" +
        "<li>Checking of data privacy</li>" +
        "<li>Security Testing</li>" +
        "<li>Scalability control</li>" +
        "<li>Performance Testing</li>" +
        "<li>Data management</li>" +
        "<li>Reliability testing</li>" +
    "</ul>" +
    "</div>";

var $mobileLevelControl = "" +
    "<div class='text-left'>" +
    "The checking procedure at the mobile level focuses on:-" +
    "<ul>" +
        "<li>App UI</li>" +
        "<li>Back-end, and its interaction</li>" +
        "<li>Lifecycle testing</li>" +
        "<li>Backward compatibility checks</li>" +
        "<li>CRUD testing (Create, Read, Update, Delete)</li>" +
    "</ul>" +
    "</div>";

var $endToEnd = "" +
    "<div class='text-left'>" +
    "It is very important to perform thorough end-to-end testing of the IoT products. This is the final check that involves all components of IoT system:-" +
    "<ul>" +
        "<li>Cloud</li>" +
        "<li>Device &</li>" +
        "<li>App</li>" +
    "</ul>" +
    "Usually, all tests are automated. Besides that, it is necessary to perform field trials." +
    "</div>";

var slider0 = [
    {title:"Predictive Analytics", body:"It helps in making adjustments to the algorithms in production, based on results fed back into the software. In other words, the application better understands how to apply its rules based on how those rules have worked in the past."},
    {title:"Test Suite Optimization", body:"Over engineering, often results in considerable loss of time, effort & resources. As businesses release faster and use automation to move forth, they often struggle with large amounts of backlog. AI BOTS can help clear the backlog and enable focusing on testing right. BOTs can identify redundant test cases, thereby removing the duplicates and enhancing traceability."},
    {title:"Log Analytics", body:"ML helps in identifying the tests cases which need to be executed automatically."},
    {title:"Defect Analytics", body:"ML helps in identifying high-risk areas of the application for the prioritization of regression test cases."},
    {title:"Traceability", body:"Extracting keywords from the Requirements Traceability Matrix (RTM) to achieve test coverage."},
    {title:"Chatbot Testing", body:"With the ever increasing usage of chatbots, automating the complex bot testing process is quite mandatory. Validation of user intent derived by chatbots for various chatbot types like FB Messenger, Skype & Slack is now easier than ever."}
];

var diamond0 = [
    {title: "Device level testing", body: $deviceLevelTesting },
    {title: "Cloud-level checking", body: $cloudLevelChecking },
    {title: "Mobile-level control", body: $mobileLevelControl },
    {title: "End-to-End testing", body: $endToEnd }
];


var $diamond1data2 = "Big Data apps work with LIVE data and provide it’s analytical insights. Performance testing is thus crucial to support scalability. Inequalities in a redundant shuffle, input splits and sorts, moving most of the aggregation computations to reduce process come up as challenges. " +
    "<div class='w-100 py-2'></div>" +
    "We eliminate them by carefully designing the system architecture and doing the performance test to identify the bottlenecks. Utilities like Hadoop performance monitoring tool can be used to capture the performance metrics like job completion time, throughput etc.";

var $diamond1data3 = "To make sure that the app supports the ever increasing load, its architecture should be tested properly with proper data samples.	Scalable but at the same time, it should be flexible enough to incorporate changes as the application complexity increases. " +
    "<div class='w-100 py-2'></div>" +
    "We prefer using smart test data samples to test the framework of the application at important moments.";

var diamond1 = [
    {title: "Reduce downtime by instant application deployment testing", body: "Big Data apps are developed for predictive analytics and their results are very crucial in business decision making. Thus data collection and instant deployment is of utmost importance for business dynamics. This makes the testing of the app and the data essential prior to the live deployment."},
    {title: "Application performance testing", body: $diamond1data2 },
    {title: "Ensure scalability", body: $diamond1data3},
    {title: "Functional consistency", body: "Access to a variety of data sets is what makes Big Data worthwhile. An enterprise can come up with unlimited possibilities with the right kind of knowledge, but when the results attained over the time turn out to be inconsistent then it could become a case of hit or miss for the association. Adequate test coverage while maintaining high test productivity allows us to define the variability accurately and removes uncertainty."},
    {title: "Security Testing", body: "As Big Data apps work on data from various sources, so security testing is of utmost importance. We take into account parameters like authentication schemes, authorisation levels, role based access levels, encryption standards, location transparency, data element and privacy controls to make sure that data processed the platform is not at all vulnerable."},
    {title: "Failover Testing", body: "The Hadoop architecture consists of a name node and attached many data nodes hosted and connected on various server machines. There are chances of name or data node or network failure. We validate the recovery method and check that data processing happens seamlessly when switched to other data nodes."},
    {title: "Automation Testing", body: "Due to periodical updation of databases, automation testing is used to test the Big Data regression test suite that is used multiple times. Hence, an automated regression test suite is executed after release to speed up the test coverage and save time during Big Data validations."}
];

var $diamond2Data1 = "" +
    "Test-first approach helps us validate the created tests with ease. It helps us to define what code we need to write to solve specific problems, because we have a definition in form of a test. It’s fairly simple to know if we have working functionality just by running the tests. With the red-green refactor routine, first step is to create a ‘red’ test and ensure that all problems related to the code are exposed." +
    "<div class='w-100 py-3'></div>" +
    "Working this way results in much more coverage, because testing becomes a first-class development activity, rather than getting pushed to the end. " +
    "<div class='w-100 py-3'></div>" +
    "In addition, when writing these tests, and specifying the scenarios, we explore the problem space more, because many questions will come up. In Test-After these discussions sometimes never happen, and the developers code what they think, rather than what the solution needs.";

var $diamond2Data2 = "Rules help in organizing the tests in a more logical pattern and help in the alignment of testing tools as well. Additionally, it helps in ensuring that everyone in the team knows about the conventions implemented and is in sync with it." +
    "<div class='w-100 py-3'></div>" +
    "Apart from this, more popular conventions are implemented to help the new members on boarding the project. It helps them to get to speed and leverage the existing knowledge.";

var $diamond2Data3 = "We prefer to have two source directories – for Implementation and Testing. The number of source directories for bigger projects can increase, but separation is maintained between implementation and test codes." +
    "<div class='w-100 py-3'></div>" +
    "The obvious benefit is that it reduces the chances of accidentally packaging tests with production binaries.";

var $diamond2Data4 = "We generally name test classes similar to implementation classes with changes in the suffix. For instance, if the implementation class is Devslane, then the test class should be Devslanetest." +
    "<div class='w-100 py-3'></div>" +
    "Additionally, in order to help identify methods that are tested, test classes can be separated by the function. For instance, if the test class has add or remove option, it can read as DevslaneAddTest and DevslaneRemoveTest." +
    "<div class='w-100 py-3'></div>" +
    "The basic benefit is to identify and locate the tests within the entire maze.";

var $diamond2Data5 = "TDD involves generation of tests constantly and within short cycles. If the initial tests are successfully running without any failures and there is no need to rewrite, then either the functionality already exists or there is some defect with the test." +
    "<div class='w-100 py-3'></div>" +
    "In this approach, the tests are expected to fail so that verifications and amendments are done to the implementation code. This helps confirm that the test is not effective without implementation." +
    "<div class='w-100 py-3'></div>" +
    "If implemented consistently with the right approach, TDD can significantly reduce the number of defects. It can further cut down additional efforts in the overall development process, as it helps fix issues faster and retest defects rigorously.";

var diamond2 = [
    {title: "Prepare a  road-map of tests", body: $diamond2Data1},
    {title: "Define Rules/Guidelines", body: $diamond2Data2 },
    {title: "Treat implementation separately", body: $diamond2Data3 },
    {title: "Similarly name test classes", body: $diamond2Data4 },
    {title: "Write New Code only when a test fails", body: $diamond2Data5 }
];

$(document).ready(function () {
    $(".logo").html("<img class='' src='../../../assets/images/graphics/full-logo-white.svg'>");
});

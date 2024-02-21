// webpack,webpack clic, webpack dev server, faker, html-webpack-plugin nodemon

module.exports = {
  mode: "develpment", //based on which environement
  devServer: {
    port: 8081,
  }, //here we r giving port 8081 so in package.json on start u can say "webpack serve" at this port
  plugins: [
    new HtmlwebpackPlugin({
      templates: "public/index.html",
    }), // this html plugins takes all the bundled js files behind the scens adds scripts files with in the public index.html file
  ],
};

//Nodemon is a command-line tool that helps with the speedy development of Node. js applications. It monitors your project directory and automatically restarts your node application when it detects any changes. This means that you do not have to stop and restart your applications in order for your changes to take effect.

//npm i webpack webpack-dev-server webpack-cli html-webpack-plugin nodemon
// Html web pack plugin is used, when web pack bundles all js files into one or multiple bundles

// 1. Say when 1 bundle in that case u can insert like <script src=“main.js” />
// 2. If multiple script bundles then we have to use a plugin called htmlwebpack plugin which auto adds all the scripts inside the html page(basically for dynamic script loadings)
// 3.

// when both applications uses same packages say faker package now it loads this application twice we need to prevent it but how?
//add shared:["package name"] in module federation plugin
// and add index.js imported bootstrap
// in this case faker package loads only once
// Queston here is if cart and product uses different versions of faker ? how to handle this?
//we should ensure differnt copies of each package gets loaded.
// mf automaticaaly loads if package versions are significntly different
// say faker 4 and 5 version it created new copies
// say 5.0.0 ad 5.1.0 -
// shared : {
//     fakeer:{
//         singleton:true // here we r telling only 1 copy should be available
//     }
// }

// if process.env.NODE_ENV === 'development'.

// This is an environment variable that gets set automatically by Webpack.
//That environment variable gets set,but how and why? because inside of our webpack.config.js file, we had added in a "mode" of development.So because we put in that option right there,
//webpack is going to automatically replace this with development. So if we are running our application in development mode, it goes inside if

// babel preset env  is used to transform latest js code to the older versions
//babel preset react -  Babel is gonna process all the different jsx tags,
// babel preset-transform-runtime  - enables soe features like async await in our project
//merge(coomon,devconfig)- which mean dev config overrides configuration by common file
//an index.js file that would import in the bootstrap file.So the only goal of index.js was to add in this import function, and all that did was give Webpack inside the browser sometime to load up Faker before it actually executed the bootstrap.js file.Because as soon as Bootstrap gets executed,we are going to try to immediately import Faker.And if we don't have access to Faker,well, we're going to very quickly get an error message.

// WHY DO WE NEED TO HAVE MOUNT FUNCTION IN MARKETING APPLICATION? CAN WE DIRECTLY EXPOSE A COMPONNET AND USE IT IN CONTAINER?

//ANS:BCZ MOUNT WILL BE GERIC we wanr near zero copuling bw container and child apps
//container should not assume that child is using a particualr frmaewrok
//any nessasery communication done with calbacks or simple events
// check why import mount function in videos
// here we want change container we r forced to changed marketing app and vioce verse

//reminder on shared mosules in videso -
//** based on ur js files in network tab u can see all js files it could be ur dependecies such as react react dom and etc, there u can see the file size like 2 mb which means(we can minify these files to reduce bundle size and uglify it, and in mf u can use shared:packajson.dependecies so that it loads same dependecies suchas react in both application only once) */

//---DEPLOYMENT------

// 1) we must be able to deploy each microfrontends end independently,(includes container)
// 2) So the location of each child app remote entry file has to be known at build time when we are deploying our container.
// 3) There are many different ways of deploying a front end application. You can use very easy to use services such as now.sh, you could use Heroku,(bundle multiple app js files and deploy sepreratly)
//4 need a ci/cd pipeline of  a sort
// at presetn remote entry file name is fixed need to think about caching issues

// when u deploy code to amazon s3 - and user tries to hit the url we weill we r not gonna server files from s3 directly, browser is going to make request to something called amaxzon cloud front (CDN)
//cdn decides which files from amazon s3 bucket needs to fetch and servers those back in the browser
// in browser first we will load html file, following by script files like main.js file this main.js file will go and get remote entry.js file from marketing remote entry has dependecy main it loads up main.js file

// ci/cd pipeline
// ultimate goal is whenever we change one of sub projects we have some process that our code automatically deploy that change automaticlly to the aws s3 bucket

//to implement this we need to use seomthing called git hub actions

// thses series of steps going to executed on a virtual machine, this virtual machine automatically created, destroyed and cleaned up automarically.

// Anytime that you create a YAML file inside this dot GitHub slash workflows directoryand then push that file off to GitHub, GitHub is going to assume that this is some kind of workflow that you're going to want to execute at some point in time. So all the files we create inside this directory are gonna be very special in nature. They're going to be automatically picked up and read by GitHub for us.

//How to create git hbh workfloe ci/cd
// .github/workglow/container.yml
//formatting is tab based in yaml file

// name : workflow name
// on: when we want to run this file what events we r watching for
//on:
// push:
//  branches :
//    - main
//     -master
    path:
    -packages

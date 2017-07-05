var my_projects = [
    {
        name: "AirQ",
        category: [
            "Android"
        ],
        img: "img/android.png",
        description: "Project",
        category_image: "img/android-logo.png"
    },
    {
        name: "Popular Movies",
        category: [
            "Android"
        ],
        img: "img/android.png",
        description: "Project",
        category_image: "img/android-logo.png"
    },
    {
        name: "HTML5 Paint",
        category: [
            "HTML 5"
        ],
        img: "img/android.png",
        description: "Project",
        category_image: "img/html.png"
    },
    {
        name: "HTML5 Paint",
        category: [
            "HTML 5"
        ],
        img: "img/android.png",
        description: "Project",
        category_image: "img/html.png"
    },
    {
        name: "Dischat",
        category: [
            "Node JS"
        ],
        img: "img/android.png",
        description: "Chatting",
        category_image: "img/node-js.png"

    },
    {
        name: "Matdaan",
        category: [
            "Node JS"
        ],
        img: "img/android.png",
        description: "",
        category_image: "img/node-js.png"

    },
    {
        name: "Ecommerce App",
        category: [
            "Node JS"
        ],
        img: "img/android.png",
        description: "",
        category_image: "img/node-js.png"
    },
    {
        name: "Twitter Followers",
        category: [
            "Angular 2"
        ],
        img: "img/android.png",
        description: "",
        category_image: "img/angular2.png"
    },
    {
        name: "Web Scrapper",
        category: [
            "Java"
        ],
        img: "img/android.png",
        description: "",
        category_image: "img/java.png"
    }
]

var myTechs = [
    "Android",
    "Angular 2",
    "HTML 5",
    "Java",
    "Node JS"
]

var myBio={
    name:"Divyanshu",
    education:[
        {
            degree:"B.Tech",
            school:"IIT Delhi"
        },
        {
            degree:"Android Developer Nanodegree",
            school:"Udacity"
        },
        {
            degree:"Front End Web Developer Nanodegree",
            school:"Udacity"
        }
    ]
}

var Project = function (data) {
    this.name = ko.observable(data.name);
    this.category = ko.observableArray(data.category);
    this.img = ko.observable(data.img);
    this.description = ko.observable(data.description);
    this.category_image = ko.observable(data.category_image);
}

var Bio=function(data){
    var self=this;
    this.name=ko.observable(data.name);
    this.education=ko.observableArray(data.education);
    
}

var viewModel = function () {

    var self = this;

    this.projects = ko.observableArray([]);
    my_projects.forEach(function (project) {
        self.projects.push(new Project(project));
    });

    this.techs = ko.observableArray([]);
    myTechs.forEach(function(tech){
        self.techs.push(tech)
    });

    this.bio=ko.observable(new Bio(myBio));

    console.log(this.bio().education().length);

    this.selectedTechs = ko.observableArray([]);

    this.filteredProjects = ko.computed(function () {

        if (self.selectedTechs().length == 0) {
            return self.projects();
        }
        return ko.utils.arrayFilter(self.projects(), function (item) {
            return self.selectedTechs().indexOf(item.category().toString()) > -1;
        });

    });

}

ko.applyBindings(new viewModel());

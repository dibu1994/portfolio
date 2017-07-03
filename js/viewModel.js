var my_projects = [
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

var Project = function (data) {
    this.name = ko.observable(data.name);
    this.category = ko.observableArray(data.category);
    this.img = ko.observable(data.img);
    this.description = ko.observable(data.description);
    this.category_image= ko.observable(data.category_image);
}

var viewModel = function () {

    var self = this;

    this.projects = ko.observableArray([]);
    this.techs = ko.observableArray(["Angular 2", "HTML 5", "Java", "Node JS"]);
    this.selectedTechs = ko.observableArray([]);
    console.log(self.selectedTechs().length);

    my_projects.forEach(function (project) {
        self.projects.push(new Project(project));
    });

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

/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      tasks : [{
                text: "Walk the dog",
                completed: true
                },
                {
                text: "Water the plants",
                completed:false
                },
                { 
                  text: "Pay your bills",
                  completed: true
                }],

        newTask: {
                  text: ""
                  }

    };
  },
  created: function() {},
  methods: {
    addTask: function() {
      var addNextTask = {
        text: this.newTask.text,
        completed: false
      }; 
      if (this.newTask.text){
        this.tasks.push(addNextTask);
        this.newTask.text = "";
      }
  },

  markComplete: function(inputTask) {
    var indexOfNewTask = this.tasks.indexOf(inputTask);
    this.tasks.splice(inputTask, 1);
  }
},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
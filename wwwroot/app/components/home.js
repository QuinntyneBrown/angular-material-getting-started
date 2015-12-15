(function () {

    "use strict";

    function HomeComponent() {
        var self = this;

        self.selectedDate = null;

        return self;
    }

    ngX.Component({
        component: HomeComponent,
        template: [
            "<div class='homeComponent'>",
            "   <h1>Home</h1>",
            "   <h1>{{ vm.selectedDate }}</h1>",
            " <md-datepicker ng-model='vm.selectedDate'></md-datepicker> ",
            "</div>"
        ].join(" ")
    });

})();
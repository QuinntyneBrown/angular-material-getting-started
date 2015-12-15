(function () {

    "use strict";

    function AboutComponent() {
        var self = this;

        return self;
    }

    ngX.Component({
        component: AboutComponent,
        template: [
            "<div class='aboutComponent'>",
            "   <h1>About</h1>",
            "</div>"
        ].join(" ")
    });

})();
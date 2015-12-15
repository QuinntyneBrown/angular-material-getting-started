(function () {

    "use strict";

    function AppHeader() {
        var self = this;

        return self;
    }

    ngX.Component({
        component: AppHeader,
        selector: "app-header",
        template: [
            "<div class='appHeader'>Angular Material - Getting Started</div>"
        ].join(" ")
    });

})();
jQuery(document).ready(function (s) {
    s("#preset1").click(function () {
        return s("#style-switch").attr("href", "assets/css/colors/orange.css"), !1;
    }),
        s("#preset2").click(function () {
            return s("#style-switch").attr("href", "assets/css/colors/purple.css"), !1;
        }),
        s("#preset3").click(function () {
            return s("#style-switch").attr("href", "assets/css/colors/red.css"), !1;
        }),
        s("#preset4").click(function () {
            return s("#style-switch").attr("href", "assets/css/colors/violet.css"), !1;
        }),
        s("#preset5").click(function () {
            return s("#style-switch").attr("href", "assets/css/colors/blue.css"), !1;
        }),
        s("#preset6").click(function () {
            return s("#style-switch").attr("href", "assets/css/colors/golden.css"), !1;
        }),
        s("#preset7").click(function () {
            return s("#style-switch").attr("href", "assets/css/colors/magenta.css"), !1;
        }),
        s("#preset8").click(function () {
            return s("#style-switch").attr("href", "assets/css/colors/yellowgreen.css"), !1;
        }),
        s("#preset9").click(function () {
            return s("#style-switch").attr("href", "assets/css/colors/green.css"), !1;
        }),
        s("#preset10").click(function () {
            return s("#style-switch").attr("href", "assets/css/colors/yellow.css"), !1;
        });
}),
    $(document).ready(function () {
        $(".style-switch-button").click(function () {
            $(".style-switch-wrapper").toggleClass("active");
        }),
            $("a.close-styler").click(function () {
                $(".style-switch-wrapper").removeClass("active");
            });
    });

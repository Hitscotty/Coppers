// js for handling user input from popup /settings.html
window.onload = function () {
    $(".ui.checkbox").checkbox({
        onChecked: function () {
            $("#hotkeys").show();
            $("#no-hotkeys").hide();
        },
        onUnchecked: function () {
            $("#hotkeys").hide();
            $("#no-hotkeys").show();
        }
    });
    $("#country").dropdown();
};

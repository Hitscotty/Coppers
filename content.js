// selector -> product_num -> identifier
function getProduct(selector) {
    return function (num) {
        return $($(selector)[num]).attr("src");
    };
}

// prev is previous identifier selector is how to get current identifier
function isEqualTo(prev, selector) {
    return function (num) {
        var current = $($(selector)[num]).attr("href");
        if (current != prev) {
            window.location.href = window.location.origin + current;
        }
    }
}

// checks out with clicks selector -> selector -> Route
function checkOutWeb(addToCart) {
    $(addToCart).click();
    window.location.href = "/checkout";
}

// checks out with ajax post data
function checkOutPost() {
    // post data
    var st = $("#st").val();
    var sizeCode = $("#s").val();

}
var getProductUrl = getProduct("#container article a");
// "" must be the previous identifier of desired cop item item's number. This
// can be found with getProductUrl()
var redirectWhenDiffTo = isEqualTo("", "#container article a");

window.onkeyup = function (e) {

    var selection_page = "http://www.supremenewyork.com/shop/new";

    if (e.keyCode === 9) {
        // set item number (0-indexed) that you wish to cop here
        if (!window.location.href.includes("new")) {
            console.log("redirecting to: " + selection_page);

            window
                .location
                .replace(selection_page);

        }
        //redirectWhenDiffTo(3); checkOutWeb("#add-remove-buttons > input");

    }
}

function main() {
    console.log("running main...");
}

// content.js
chrome
    .runtime
    .onMessage
    .addListener(function (request, sender, sendResponse) {
        console.log("loaded add listener");

        if (request.message === "clicked_browser_action") {
            console.log("open new tabs");

        }
    });
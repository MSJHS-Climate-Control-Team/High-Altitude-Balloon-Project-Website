const nav = "<div id=\"nav\" class=\"row text-right justify-content-end\">\n" +
    "    <a href=\"#\" class=\"navLink\">HOME</a>\n" +
    "    <a href=\"#\" class=\"navLink\">ABOUT</a>\n" +
    "    <a href=\"#\" class=\"navLink\">SENSORS</a>\n" +
    "    <a href=\"#\" class=\"navLink\">LAUNCH</a>\n" +
    "    <a href=\"#\" class=\"navLink\">CONTRIBUTORS</a>\n" +
    "</div>"
$( document ).ready(() => {
    document.getElementById("include-nav").innerHTML = nav
});


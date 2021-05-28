// navigation menu that redirect to the different pages
const nav = "<div id=\"nav\" class=\"row text-right justify-content-end\">\n" +
    "    <a href=\"index.html\" class=\"navLink\">HOME</a>\n" +
    "    <a href=\"about.html\" class=\"navLink\">ABOUT</a>\n" +
    "    <a href=\"sensors.html\" class=\"navLink\">SENSORS</a>\n" +
    "    <a href=\"launch.html\" class=\"navLink\">LAUNCH</a>\n" +
    "    <a href=\"contributors.html\" class=\"navLink\">CONTRIBUTORS</a>\n" +
    "</div>"
$( document ).ready(() => {
    document.getElementById("include-nav").innerHTML = nav
});


(function () {
    let rootElem = document.getElementById("spa");
    let menuElem = $(".navbar-nav");

    new Router([
        new PageHome(rootElem, menuElem, true),
        new PageItems(rootElem, menuElem),
        new PageContacts(rootElem, menuElem),
        new PageAbout(rootElem, menuElem)
    ]).init(rootElem);
}());
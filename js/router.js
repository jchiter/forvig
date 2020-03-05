class Router {
    routes;
    history = [];

    constructor(routes) {
        this.routes = routes;
    }

    init() {
        this.hasChanged();

        window.addEventListener('hashchange', () => {
            this.hasChanged();
        });

        $("#backBtn").on("click", () => {
            this.historyLast();
        });
    }

    hasChanged() {
        if (window.location.hash.length > 0) {
            this.routes.forEach(page => {
                if (page.isActiveRoute(window.location.hash.substr(1))) {
                    this.goToRoute(page);
                }
            });
        } else {
            this.routes.forEach(page => {
                if (page.isDefault) {
                    this.goToRoute(page);
                }
            });
        }
    }

    historyLast() {
        this.history.pop();
        let last = this.history[this.history.length > 1 ? this.history.length - 1 : 0];

        window.location.hash = "#" + last.pageName;
    }

    goToRoute(page) {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
                page.render(xhttp.responseText);
                if (this.history.length < 10) {
                    if (!this.history.includes(page)) {
                        this.history.push(page);
                    }
                } else {
                    this.history.pop();
                    this.history.unshift(page);
                }

                if (this.history.length > 1) {
                    $("#backBtn").show();
                } else {
                    $("#backBtn").hide();
                }
            }
        };

        xhttp.open('GET', `pages/${page.fileName}`, true);
        xhttp.send();
    }
}
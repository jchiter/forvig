class Page {
    rootElem;
    pageName;
    fileName;
    titleName;
    menu;
    constructor(pageName, fileName, titleName, rootElem, menu, isDefault) {
        this.pageName = pageName;
        this.fileName = fileName;
        this.rootElem = rootElem;
        this.titleName = titleName;
        this.isDefault = isDefault;
        this.menu = menu;

        $(this.menu).append(`<a class="nav-item nav-link" href="#${this.pageName}">${this.titleName}</a>`);
    }

    render(response) {
        console.log(`render call for ${this.pageName}`);
        this.rootElem.innerHTML = response;
        $("a.nav-link").removeClass("active");
        $(`a[href='#${this.pageName}']`).addClass("active");
        $("title").html($(`a.nav-link[href='#${this.pageName}']`).text());
    }

    isActiveRoute (hashedPath) {
        return hashedPath.replace('#', '') === this.pageName;
    }
}
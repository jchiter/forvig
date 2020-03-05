class PageItems extends Page {
    items = {
        0: {
            "price": 10,
            "name": "bublik",
            "amount": 100
        },
        1: {
            "price": 20,
            "name": "bublik1",
            "amount": 200
        },
        2: {
            "price": 30,
            "name": "bublik3",
            "amount": 300
        },
        3: {
            "price": 40,
            "name": "bublik4",
            "amount": 400
        }
    };

    constructor(rootElem, menu, isDefault) {
        super("items", "items.html", "Товары", rootElem, menu, isDefault);
    }

    render(response) {
        super.render(response);

        $(".items").append("<ul></ul>");
        for (var item in this.items) {
            $(".items").find("ul").append(`<li>На складе <i>${this.items[item].amount}</i> <i>${this.items[item].name}</i> по цене <i>${this.items[item].price}</i> руб.</li>`);
        }
    }

}
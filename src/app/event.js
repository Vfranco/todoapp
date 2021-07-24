class Events {

    getNodeById(node) {
        return document.getElementById(node);
    }

    getQuerySelector(node) {
        return document.querySelector(node);
    }

    click(btn, event, callback) {
        let action = document.getElementById(btn);
        action.addEventListener(event, callback);
    }
}
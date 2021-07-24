class AppTask extends Events {

    tasksList = [];

    createTask(input) {
        if (input !== "") this.tasksList.push(input);
    }

    showList(nodeList) {
        let html = ``;

        this.tasksList.forEach((node, index) => {
            html = `<div id="${index}" class="list__container__task">
            <span>${node}</span>
            <div class="list__container__call-actions">
                <i id="edit-${index}" class="fa fa-edit"></i>
                <i id="delete-${index}" class="fa fa-trash"></i>
            </div>
        </div>`;
        });

        nodeList.insertAdjacentHTML('beforeend', html);
    }

    removeTask(nodeList) {
        let tasks = Array.from(nodeList.children);

        tasks.forEach((element, index) => {
            this.click('delete-' + index, 'click', () => {
                this.tasksList.splice(index, 1);
                this.getNodeById(index).remove();
            });
        });
    }

    editTask() {

    }
}
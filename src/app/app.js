'use-strict';

(function ($, tasks) {

    let inputTask = $.getNodeById('task');
    let nodeList = $.getQuerySelector('#resume_tasks');

    $.click('btn-create', 'click', function() {
        tasks.createTask(inputTask.value);
        inputTask.value = "";
        tasks.showList(nodeList);
        tasks.removeTask(nodeList);
    });
    
})(new Events, new AppTask);
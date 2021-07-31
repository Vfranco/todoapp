'use-strict';

(function ($, tasks) {

    let inputTask = $.getNodeById('task');
    let nodeList = $.getQuerySelector('#resume_tasks');

    $.click('btn-create', 'click', function() {
        tasks.createTask(inputTask.value);
        tasks.showList(nodeList);
        tasks.removeTask(nodeList);
        inputTask.value = "";
    });

    $.click('btn-click', 'click', function(){
        alert('Hola Jorge!');
    });
    
})(new Events, new AppTask);
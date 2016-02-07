var Task = function (name) {
    'use strict';
    this.name = name;
    this.complited = false;

};

Task.prototype.complete = function () {
        console.log('Completing Task: ' + this.name);
        this.complited = true;
    };

Task.prototype.save = function () {
        console.log('Save Task: ' + this.name);
    };

module.exports = Task;
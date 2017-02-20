"use strict";
var AppData = (function () {
    function AppData() {
    }
    AppData.prototype.createDb = function () {
        var searchItems = [
            { id: '111', name: 'item1' },
            { id: '222', name: 'item2' },
            { id: '333', name: 'item3' },
            { id: '444', name: 'item4' },
            { id: '555', name: 'item5' },
            { id: '666', name: 'item6' }
        ];
        return { searchItems: searchItems };
    };
    return AppData;
}());
exports.AppData = AppData;
//# sourceMappingURL=app-data.js.map
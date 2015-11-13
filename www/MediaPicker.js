var exec = require('cordova/exec');

exports.getAudio = function(success, error, multiple, icloud) {
    exec(success, error, "MediaPicker", "getAudio", [multiple,icloud]);
};

exports.deleteSongs = function(success, error, multiple, filepath) {
    exec(success, error, "MediaPicker", "deleteSongs", [multiple,filepath]);
};

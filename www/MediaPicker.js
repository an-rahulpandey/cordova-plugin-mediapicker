var exec = require('cordova/exec');

exports.getAudio = function(success, error, multiple, icloud, title) {
	if(multiple) multiple = 'true'; else multiple = 'false';
	if(icloud) icloud = 'true'; else icloud = 'false';

    exec(success, error, "MediaPicker", "getAudio", [multiple,icloud, title]);
};

exports.deleteSongs = function(success, error, multiple, filepath) {
	if(multiple) multiple = 'true'; else multiple = 'false';
	
    exec(success, error, "MediaPicker", "deleteSongs", [multiple,filepath]);
};

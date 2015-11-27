/********* MediaPicker.h Cordova Plugin header *******/

#import <Cordova/CDVPlugin.h>
#import <Cordova/CDV.h>
#import <MediaPlayer/MediaPlayer.h>


@interface MediaPicker : CDVPlugin <MPMediaPickerControllerDelegate> {
    NSString *callbackID;
    NSData *audioData;
    CDVPluginResult *plresult;
    NSMutableArray *songsList;

}

- (void) getAudio:(CDVInvokedUrlCommand*)command;
- (void) deleteSongs:(CDVInvokedUrlCommand *)command;

@end

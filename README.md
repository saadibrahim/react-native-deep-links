# React Native deep links tutorial

Files for React Native deep links tutorial.

Tutorial URL: https://youtu.be/rvDq2WMU4mw

Blog Post: https://saadibrah.im/implement-deep-linking-in-react-native-apps-using-universal-links-and-url-schema/

### Libraries or tools used

 * React Native
 * React Navigation

### Useful links

 * [Difference between the two types of deep links](https://medium.com/wolox/ios-deep-linking-url-scheme-vs-universal-links-50abd3802f97)
 * [Supporting Associated Domains – iOS](https://developer.apple.com/documentation/safariservices/supporting_associated_domains)
 * [React Native Linking Library](https://reactnative.dev/docs/linking)
 * [Deep linking with React Navigation](https://reactnavigation.org/docs/deep-linking/#universal-links)
 * [Configuring links – React Navigation](https://reactnavigation.org/docs/configuring-links/)
 * [Handling Android App Links](https://developer.android.com/training/app-links)
 * [Create Deep Links to App Content – Android](https://developer.android.com/training/app-links/deep-linking)
 * [Declare website associations – Android](https://developer.android.com/training/app-links/verify-site-associations#web-assoc)

### Commands to test deep links

```sh
## Android
adb shell am start -W -a android.intent.action.VIEW -d "saadibrahim://Details" com.deeplinktutorial

adb shell am start -W -a android.intent.action.VIEW -d "https://saadibrah.im/Details" com.deeplinktutorial

## iOS
xcrun simctl openurl booted "saadibrahim://Details"

xcrun simctl openurl booted "https://saadibrah.im/Details"
```
Replace the URLs with your URL in the above commands and replace `com.deeplinktutorial` with your application ID.

### Running the app in simulator

To run the app you need yarn package manager. Once you have yarn installed, clone the repo and navigate to it's directory in terminal and run the following commands:

 ```sh
 ## to install the dependencies
 yarn
 ## to run the app on iOS
 cd packages/mobile/ios/ && pod install && cd ..
 react-native run-ios
 ## to run the app on Android
 react-native run-android
 ```
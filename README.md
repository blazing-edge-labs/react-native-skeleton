# React Native Skeleton
Here at Blazing Edge we'll be using this skeleton project to spend some time on discovering new and cool modules that can be used in React Native apps to improve functionalities and usability.

Because of complexity in the code introduced by some of the modules and frequent changes in react native codebase, we won't be cloning this repository when starting new project. It'll be used as a reference on how to use specific modules.

We are also publishing blog posts on how we use React Native in the company, read more about it here: [Essential React Native Setup](https://blog.blazingedge.io/essential-react-native-setup-5565662d0e56)

## Installation
First of all, make sure that you have packages installed by running installation by either npm or yarn: 

`npm install`

After that, depending on the platform you'd like the app to run on, write either 

`react-native run-android` or `react-native run-ios`

## Modules used in this project
### Navigation
[React Native Navigation](https://github.com/wix/react-native-navigation)

Our go-to solution for managing navigation in React Native application. It'll allow you to have native and performant experience while navigating through your app.

### Push notifications
[One Signal](https://github.com/geektimecoil/react-native-onesignal)

Used by our API server to deliver push notifications to users.

### Over the Air updates
[Code Push](https://github.com/Microsoft/react-native-code-push)

Code Push is a solution that we use for deploying updates to already installed apps over the air.

### Crashes, Analytics
[Fabric](https://github.com/corymsmith/react-native-fabric)

We integrated Fabric services into our application to track crashes and general app usage

### Handling keyboard events
[React Native Smart Keyboard](https://github.com/remobile/react-native-smart-keyboard), [React Native Keyboard Aware Scroll View](https://github.com/APSL/react-native-keyboard-aware-scroll-view)

Code example: https://gist.github.com/mateoKaradza/38473ec173484c584e8fe3bc1bfb12b8

React Native Smart Keyboard is a module for iOS, just link it in xCode and it'll automatically control keyboard events. In case of Android, we are using KeyboardAwareScrollView instead of a normal ScrollView to get better behavior on Android.

### Image cropper/picker
[React Native Image Crop Picker](https://github.com/ivpusic/react-native-image-crop-picker)
iOS/Android image picker with support for camera, configurable compression, multiple images and cropping
  
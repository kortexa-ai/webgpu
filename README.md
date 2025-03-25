# React Native WebGPU sample app

Sample app that shows how to use React Native implementation of WebGPU using [Dawn](https://dawn.googlesource.com/dawn).
This sample is based on @wcandillon's [example app](https://github.com/wcandillon/react-native-webgpu/tree/main/apps/example).

## Webgpu App

To run the webgpu app you first need to [build Dawn or download the prebuilt binaries](#building-dawn).

From there you will be able to run the example app properly.

## Troubleshooting

### iOS

To run the React Native WebGPU project on the iOS simulator, you need to disable the Metal validation API.
In "Edit Scheme," uncheck "Metal Validation."

<img width="1052" alt="Uncheck 'Metal Validation'" src="https://github.com/user-attachments/assets/2676e5cc-e351-4a97-bdc8-22cbd7df2ef2">

### Downloading Dawn

Download the prebuilt binaries from GitHub.
You need to have the [Github CLI](https://cli.github.com/) installed:

```sh
$ yarn
$ yarn download-artifacts
$ yarn copy-artifacts
```

Alternatively you can also download the prebuilt binaries [here](https://github.com/wcandillon/react-native-webgpu/actions/workflows/build-dawn.yml).

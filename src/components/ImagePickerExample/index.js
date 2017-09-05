import React, { Component } from 'react'
import { Button, View } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-crop-picker'

class ImagePickerComponent extends Component {
  constructor (props) {
    super(props)

    this.openCamera = this.openCamera.bind(this)
    this.openGallery = this.openGallery.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }

  openCamera () {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true
    }).then(image => {
      this.handleUpload(null, image)
    })
  }

  openGallery () {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true
    }).then(image => {
      this.handleUpload(null, image)
    })
  }

  handleUpload (err, res) {
    if (err) { console.log('oops') }
    let theUri = res.uri || res.path

    const toCheck = 'file://'

    if (theUri.indexOf(toCheck) !== -1) { theUri = theUri.slice(toCheck.length) }

    RNFetchBlob.fetch('POST', 'http://10.29.0.99:7878/upload', {
      'Content-Type': 'multipart/form-data'
    }, [{
      name: 'file',
      filename: res.fileName || res.filename || 'noname',
      data: RNFetchBlob.wrap(theUri)
    }])
    .uploadProgress({ count: 20 }, (written, total) => {
      console.log('uploaded', written / total)
    })
    .then(response => console.log(response))
  }

  render () {
    return (
      <View>
        <Button
          onPress={this.openCamera}
          title='Open Camera'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
        <Button
          onPress={this.openGallery}
          title='Open Gallery'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
      </View>
    )
  }
}

export default ImagePickerComponent

import React, { Component } from 'react'
import RNFetchBlob from 'react-native-fetch-blob'
import FilePicker from '../FilePicker'

class FileUpload extends Component {
  constructor (props) {
    super(props)

    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload (err, res) {
    if (err)
      console.log('oops')
    let theUri = res.uri
    
    const toCheck = 'file://'
    
    if (theUri.indexOf(toCheck) !== -1)
      theUri = theUri.slice(toCheck.length)

    RNFetchBlob.fetch('POST', 'http://10.29.0.99:7878/upload', {
      'Content-Type' : 'multipart/form-data',
    }, [{
      name: 'file',
      filename: res.fileName,
      data: RNFetchBlob.wrap(theUri)
    }])
    .uploadProgress({ count: 20 }, (written, total) => {
      console.log('uploaded', written / total)
    })
    .then(response => console.log(response))
  }

  render () {
    return (
      <FilePicker
        callback={this.handleUpload}
      />
    )
  }
}

export default FileUpload

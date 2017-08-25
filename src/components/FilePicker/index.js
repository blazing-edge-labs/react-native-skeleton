import React, { Component } from 'react'
import { Button } from 'react-native';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

class FilePicker extends Component {
  constructor (props) {
    super(props)

    this.onPressLearnMore = this.onPressLearnMore.bind(this)
  }

  onPressLearnMore () {
    const { callback } = this.props
    DocumentPicker.show({
      filetype: [DocumentPickerUtil.allFiles()],
    },(error, res) => {
      if (error)
        return callback(error)
      return callback(null, res)
    });
  }

  render () {
    return (
      <Button
        onPress={this.onPressLearnMore}
        title="Upload File"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    )
  }
}

export default FilePicker
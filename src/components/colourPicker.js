import React, { useState } from "react"
import { ChromePicker } from "react-color"

const colourPicker = (props) => {
  return (
    <>
    <div>testststst</div>
      <img
        src="images/colorpicker.png"
        alt=""
        onClick={props.handleFirstColorPickerImage}
      />
      <div
        class="firstColorPicker"
        style={
          props.displayFirstColorPicker
            ? props.showColorPicker
            : props.hideColorPicker
        }
      >
        <ChromePicker
          color={props.firstColorInput}
          onChange={props.handleFirstColorPicker}
        />
      </div>
    </>
  )
}

export default colourPicker

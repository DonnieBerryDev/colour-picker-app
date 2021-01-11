import "./App.scss"
import React, { useState } from "react"
import { ChromePicker } from "react-color"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

function App() {
  const [firstColorInput, setFirstColorInput] = useState("")
  const [secondColorInput, setSecondColorInput] = useState("")
  const [displayFirstColorPicker, setDisplayFirstColorPicker] = useState(false)
  const [displaySecondColorPicker, setDisplaySecondColorPicker] = useState(
    false
  )
  const [gradientSelected, setGradientSelected] = useState("linear")

  const [degSlider, setDegSlider] = useState("90")

  const [mode, setMode] = useState("single")

  const handlefirstColorChange = (e) => {
    setFirstColorInput(e.target.value)
    console.log(firstColorInput)
  }

  const handlesecondColorChange = (e) => {
    setSecondColorInput(e.target.value)
    console.log(secondColorInput)
  }

  const handleDegSlider = (e) => {
    setDegSlider(e.target.value)
  }

  const handleFirstColorPicker = (color) => {
    setFirstColorInput(color.hex)
  }

  const handleSecondColorPicker = (color) => {
    setSecondColorInput(color.hex)
  }

  const handleFirstColorPickerImage = (e) => {
    setDisplayFirstColorPicker((prevValue) => !prevValue)
    setDisplaySecondColorPicker(false)
  }

  const handleSecondColorPickerImage = () => {
    setDisplaySecondColorPicker((prevValue) => !prevValue)
    setDisplayFirstColorPicker(false)
  }

  const handleLinearSelector = () => {
    setGradientSelected("linear")
  }

  const handleRadialSelector = () => {
    setGradientSelected("radial")
  }

  const gradientChoice =
    gradientSelected === "linear"
      ? `linear-gradient(${degSlider}deg, ${firstColorInput}, ${secondColorInput})`
      : `radial-gradient(circle, ${firstColorInput}, ${secondColorInput})`
  const showColorPicker = {
    display: "block",
  }

  const hideColorPicker = {
    display: "none",
  }

  const swapColours = () => {
    setFirstColorInput(secondColorInput)
    setSecondColorInput(firstColorInput)
  }

  const degSliderToggle = {
    display:
      mode === "single" || gradientSelected === "radial" ? "none" : "block",
  }

  return (
    <div
      className="App"
      style={{
        background: mode === "single" ? firstColorInput : gradientChoice,
      }}
    >
      <div className="container">
        <div id="sourcecode">
          <p>Source Code:</p>
          <p className="code">
            {mode === "single"
              ? `background: ${firstColorInput}`
              : `background: ${gradientChoice}`}
          </p>
        </div>
        <div id="colour_picker">
          <div class="firstInput inputSection">
            <input
              type="text"
              onChange={handlefirstColorChange}
              value={firstColorInput}
              id="input_first"
              placeholder={
                mode === "single"
                  ? "Enter color name or code"
                  : "Enter First Colour"
              }
              className="inputs"
            />
            <img
              src="images/colorpicker.png"
              alt=""
              onClick={handleFirstColorPickerImage}
            />
            <div
              class="firstColorPicker"
              style={
                displayFirstColorPicker ? showColorPicker : hideColorPicker
              }
            >
              <ChromePicker
                color={firstColorInput}
                onChange={handleFirstColorPicker}
              />
            </div>
          </div>
          <div class="secondInput inputSection">
            <input
              type="text"
              onChange={handlesecondColorChange}
              value={secondColorInput}
              style={{ display: mode === "single" ? "none" : "block" }}
              id="input_second"
              placeholder={mode === "single" ? "" : "Enter Second Colour"}
              className="inputs"
            />
            <img
              src="images/colorpicker.png"
              alt=""
              style={{ display: mode === "single" ? "none" : "block" }}
              onClick={handleSecondColorPickerImage}
            />
            <div
              class="secondColorPicker"
              style={
                displaySecondColorPicker ? showColorPicker : hideColorPicker
              }
            >
              <ChromePicker
                color={secondColorInput}
                onChange={handleSecondColorPicker}
              />
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setMode(mode === "single" ? "gradient" : "single")}
          >
            {mode === "single" ? "Single Colour" : "Gradient"}
          </Button>
          <input
            type="range"
            min="1"
            max="360"
            defaultValue="90"
            onChange={handleDegSlider}
            style={degSliderToggle}
            id="input_degSlider"
          />
          <p
            style={{
              display:
                mode === "single" || gradientSelected === "radial"
                  ? "none"
                  : "block",
            }}
          >
            {degSlider}deg
          </p>
          <div
            class="gradientButtons"
            style={{ display: mode === "single" ? "none" : "block" }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLinearSelector}
              className="doubleBtn_1"
            >
              Linear
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleRadialSelector}
              className="doubleBtn_2"
            >
              Radial
            </Button>
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={swapColours}
            style={{ display: mode === "single" ? "none" : "block" }}
          >
            Swap Colours
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App

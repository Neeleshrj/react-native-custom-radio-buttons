# React Native Simple Radio Buttons

Easy and simple to use Radio Buttons for your React Native Application.

## Installation

`npm i react-native-radio-buttons`

## Components

<ul>
    <li>RadioButtons</li>
    <ul>
        <li>
            Container to create a radio button. 
        </li>
    </ul>
</ul>

## Props

<ul>
    <li>
        <b>text:</b> Accepts string to show as option in Radio Button
    </li>
    <li>
        <b>setOption:</b> Callback to change selected option
    </li>
    <li>
        <b>selected:</b> Set which option is selected 
    </li>
</ul>

## Optional Props

<ul>
    <li>
        <b>radioButtonBorderColor:</b> Set the Radio Button Oultine Color (Default: #000)
    </li>
    <li>
       <b> radioButtonSize:</b> Sets the size of the radio button (Default: 20)
    </li>
    <li>
        <b>selectedRadioButtonColor:</b> Sets the color of the radio button which has been selected (Default: #000)
    </li>
    <li>
        <b>optionTextStyling:</b> Sets custom styling for the option Text next to the Radio Button</b>
    </li>
</ul>

## Examples

### 1. Using without Optional Props

#### Import

`import RadioButtons from "react-native-radio-buttons"`

#### Usage

```js
function Example(){
    const [option, setOption] = useState("");
    const options = ["Option 1", "Option 2", "Option 3"];

    return (
        <View style={styles.container}>
            <View style={{ width: "80%" }}>
            {options.map((obj) => (
                <RadioButtons
                    text={obj}
                    setOption={(val) => setOption(val)}
                    selected={option}
                    key={obj}
                />
                ))}
            </View>
            <View style={{ marginTop: 20 }}>
                <Text>Selected Option is: {option}</Text>
            </View>
        </View>
}
```
### Example Screenshot
<image src="./screenshots/s1.png" width="256" height="512" />


### 2. Using with Optional Props

#### Import

`import RadioButtons from "react-native-radio-buttons"`

#### Usage

```js
function Example(){
    const [option, setOption] = useState("");
    const options = ["Option 1", "Option 2", "Option 3"];

    return (
        <View style={styles.container}>
            <View style={{ width: "80%" }}>
            {options.map((obj) => (
                <RadioButtons
                    text={obj}
                    setOption={(val) => setOption(val)}
                    selected={option}
                    radioButtonBorderColor="#2ecc71"
                    radioButtonSize={24}
                    selectedRadioButtonColor="#2ecc71"
                    optionTextStyling={{fontSize: 24, color: "#2ecc71"}}
                    key={obj}
                />
                ))}
            </View>
            <View style={{ marginTop: 20 }}>
                <Text>Selected Option is: {option}</Text>
            </View>
        </View>
}
```

### Example Screenshot
<image src="./screenshots/s2.png" width="256" height="512" />


## Issues and Contribution
Feel free to add any new feature, open issues or fork and create your own version of it with proper crediting.
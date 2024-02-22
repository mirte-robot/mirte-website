<template>

<div>

  <div class="container">
    <div class="row">
      <div class="col-4" @click="mirte='light'" style="text-align: center;">
        <button style="padding: 10px;">
         <img src="@/assets/images/light_render.png" style="max-height:50px;"/><span class="mirte">MIRTE</span> light
        </button> 
      </div>
      <div class="col-4" @click="mirte='basic'" style="text-align: center;">
        <button style="padding: 10px;">
         <img src="@/assets/images/basic_render.png" style="max-height:50px;"/><span class="mirte">MIRTE</span> basic
        </button>
      </div>
      <div class="col-4" @click="mirte='pioneer'" style="text-align: center;">
        <button style="padding: 10px;">
         <img src="@/assets/images/pioneer_render.png" style="max-height:50px;"/><span class="mirte">MIRTE</span> pioneer
        </button>
      </div>
    </div>

    <h1 style="text-align: center;padding-top: 20px;">CHOOSE YOUR ITEMS</H1>

    <div class="row">
      <div class="col-sm-3" v-for="component in hardware" style="padding-top: 40px;">
        <div :style="robots[mirte]['disabled'].includes(component.name) ? 'color: #ccc;' : ''">
        {{ component.name }}
        </div>
        <div v-for="option in component.options" style="font-family:'Overpass-Light'; padding-top: 7px;">
          <input style="accent-color: #9db7be;" type="checkbox" value="" id="flexCheckDefault" :checked="robots[mirte]['selected'].includes(option)" :disabled="robots[mirte]['disabled'].includes(option)">
          <label class="form-check-label" for="flexCheckDefault">
            {{ option }}
          </label>
          </div>
        </div>
      </div>

    </div>

   </div>


</template>



<script>

//import { reactive, computed } from "vue";

export default {

    data() {
      return {
        mirte: 'basic',
        robots: {
          light: {'selected': ['L9110S', '(2x) 3-6V Yellow DC Motor', 'Breadboard (Dupont)', 'Ball caster wheel', '(2x) Yellow wheel', 'Breadboard supply (MB102)','5V Power bank','Micro USB cable','(2x) Reflectance (TCRT5000)', '(2x) Light LDR (LM393)', '(2x) IR obstacle'],
                  'disabled': ['Single Board Computer', 'Orange Pi Zero 2', 'Raspberry Pi 2/3/4', 'Micro Controller', 'Raspberry Pi Pico H', 'Arduino Nano', 'Arduino Uno', 'STM32', '(2x) 3-6V Blue DC Motor incl encoder', 'MIRTE PCB (JST)', '16GB SD Card', '(2x) SG90 Servo', '(2x) 128x64 I2C OLED', '(2x) Ultrasonic Distance (HC-SR04)', '5 Key Keypad', 'USB Camera']},
          basic: {'selected': ['Raspberry Pi Pico H', 'L9110S', '(2x) 3-6V Yellow DC Motor', 'Breadboard (Dupont)', 'Ball caster wheel', '(2x) Yellow wheel', 'Breadboard supply (MB102)','5V Power bank','Micro USB cable','(2x) Reflectance (TCRT5000)', '(2x) Light LDR (LM393)', '(2x) IR obstacle', '(2x) Ultrasonic Distance (HC-SR04)', '5 Key Keypad'],
                  'disabled': ['Single Board Computer', 'Orange Pi Zero 2', 'Raspberry Pi 2/3/4', 'Arduino Nano', 'Arduino Uno', 'STM32', '(2x) 3-6V Blue DC Motor incl encoder', '16GB SD Card', 'USB Camera']},
          pioneer: {'selected': ['Orange Pi Zero 2', 'Raspberry Pi Pico H', 'L9110S', '(2x) 3-6V Yellow DC Motor', 'MIRTE PCB (JST)', '16GB SD Card', 'Ball caster wheel', '(2x) Yellow wheel', '5V Power bank','Micro USB cable', '(2x) SG90 Servo', '(2x) 128x64 I2C OLED', '(2x) Reflectance (TCRT5000)', '(2x) Light LDR (LM393)', '(2x) IR obstacle', '(2x) Ultrasonic Distance (HC-SR04)', '5 Key Keypad', 'USB Camera'],
                    'disabled': []}
        },
        hardware: [
          {name: 'Single Board Computer', options: ['Orange Pi Zero 2', 'Raspberry Pi 2/3/4']},
          {name: 'Micro Controller', options: ['Raspberry Pi Pico H', 'Arduino Nano', 'Arduino Uno', 'STM32']},
          {name: 'Motor Controller', options: ['L9110S', 'L298N', 'MX1919']},
          {name: 'Wiring', options: ['Breadboard (Dupont)', 'MIRTE PCB (JST)']},
          {name: 'Motors', options: ['(2x) 3-6V Yellow DC Motor', '(2x) 3-6V Blue DC Motor incl encoder']},
          {name: 'Misc', options: ['16GB SD Card', 'Ball caster wheel', '(2x) Yellow wheel']},
          {name: 'Power Supply', options: ['5V Power bank', 'Breadboard supply (MB102)', 'Micro USB cable']},
          {name: 'Actuators (optional)', options: ['(2x) SG90 Servo', '(2x) 128x64 I2C OLED']},
          {name: 'Sensors (optional)', options: ['(2x) Reflectance (TCRT5000)', '(2x) Light LDR (LM393)', '(2x) IR obstacle', '(2x) Ultrasonic Distance (HC-SR04)', '5 Key Keypad', 'USB Camera']},
        ]
      }
    }
}


</script>

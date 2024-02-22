<template>

<div class="container d-flex align-items-center">
  <div class="row">

    <div class="col-md-3 col-xs-12 mb-1">
              <h3 style="text-align: center;">1</h3>
              <h3 style="text-align: center;">Download Base</h3>
              <p style="padding-top: 20px;">Select the files of the base of <span class="mirte">MIRTE</span> <b> {{ mirte }}</b>:</p>

              <select v-if="level === 'higher'" class="form-select" v-model="base">
                <option value="dxf">DXF - lasercut your robot on 4mm plywood</option>
                <option value="freecad">Freecad models</option>
              </select>
 
              <div style="text-align: center; margin-top: 20px;">   
              <a class="btn btn-primary my-button" :href="getUrlDXF()" >Download</a>
              </div>
    </div>


    <div class="col-md-3 col-xs-12 mb-1">
              <h3 style="text-align: center;">2</h3>
              <h3 style="text-align: center;">Get Hardware</h3>
              <p style="padding-top: 20px;">Select a Single Board Computer, Microcontroller, and check the other hardware you need in the <router-link to="/configure?r=light">bill of materials</router-link>.</p>
    </div>


    <div class="col-md-3 col-xs-12 mb-1">
              <h3 style="text-align: center;">3</h3>
              <h3 style="text-align: center;">Download Software</h3>
              <p style="padding-top: 20px;">Select the SD card image for your Single Board Computer:</p>

              <select v-if="level === 'higher'" class="form-select" v-model="software">
                <option value="orange_pi_zero2" selected>Orange Pi Zero 2</option>
                <option value="raspberry_pi">Raspberry Pi 2/3/4</option>
                <option value="latest_release">Source code of latest release</option>
                <option value="main">Latest source code</option>
              </select>

              <div style="text-align: center; margin-top: 20px;">
              <a class="btn btn-primary my-button" :href="getUrl()">Download</a>
              </div>
    </div>

    <div class="col-md-3 col-xs-12 mb-1">
              <h3 style="text-align: center;">4</h3>
              <h3 style="text-align: center;">Build and Learn</h3>
              <p style="padding-top: 20px;">Follow the build instructions and check out the <a href="https://docs.mirte.org/">documentation</a>.</p>
    </div>




  </div>
</div>



</template>






<script>


export default {
    data() {
      return {
        level: this.$route.query.l,
        mirte: 'pioneer',
        software: 'orange_pi_zero2',
        base: 'dxf'
      }
    },
    methods: {
      // TODO: get latest, rather than hardcoded
      getUrl() {
         if (this.software == "orange_pi_zero2"){
            return "https://github.com/mirte-robot/mirte-sd-image-tools/releases/download/0.1/mirte_orangepizero2_2024-01-31_16_53_36.img.xz";
         } else if (this.software == "raspberry_pi"){
            return "https://github.com/mirte-robot/mirte-sd-image-tools/releases/download/0.1/mirte_rpi4b_2024-01-31_17_22_56.img.xz";
         } else if (this.software == "latest_release"){
            return "https://github.com/mirte-robot/mirte-sd-image-tools/releases/latest";
         } else if (this.software == "latest_release"){
            return "https://github.com/mirte-robot/mirte-sd-image-tools/releases";
         }
      },
      getUrlDXF() {
         if (this.base == "dxf"){
            return "https://github.com/mirte-robot/mirte-frame/releases/latest" 
         } else if (this.base == "freecad"){
            return "https://github.com/mirte-robot/mirte-frame/releases/latest"
         }
      }
    },

}


</script>

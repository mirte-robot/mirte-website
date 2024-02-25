<template>

<div v-if="level !== 'primary'" class="container d-flex align-items-center">
  <div class="row">
    <div class="col-md-3 col-xs-12 mb-1" style="padding-top: 50px;">
              <h3 style="text-align: center;">1</h3>
              <h3 style="text-align: center;">{{ $t("start.download_base") }}</h3>
              <p style="padding-top: 20px;">{{ $t("start.download_base_text") }} {{ mirte }}:</p>

              <select v-if="level === 'higher'" class="form-select" v-model="base">
                <option value="dxf">{{ $t("start.lasercut") }}</option>
                <option value="freecad">{{ $t("start.dxf_source") }}</option>
              </select>
 
              <div style="text-align: center; margin-top: 20px;">   
              <a class="btn btn-primary my-button" :href="getUrlDXF()" >{{ $t("start.download") }}</a>
              </div>
    </div>


    <div class="col-md-3 col-xs-12 mb-1"  style="padding-top: 50px;">
              <h3 style="text-align: center;">2</h3>
              <h3 style="text-align: center;">{{ $t("start.get_hardware") }}</h3>
              <p v-if="level === 'secondary'" style="padding-top: 20px;">{{ $t("start.get_hardware_text") }} <router-link :to="'/configure?r=' + mirte">bill of materials</router-link>.</p>
              <p v-if="level === 'higher'" style="padding-top: 20px;">{{ $t("start.get_hardware_text") }} <router-link :to="'/configure?r=' + mirte + '&c=true'">bill of materials</router-link>.</p>
    </div>


    <div class="col-md-3 col-xs-12 mb-1"  style="padding-top: 50px;">
              <h3 style="text-align: center;">3</h3>
              <h3 style="text-align: center;">{{ $t("start.download_software") }}</h3>
              <p style="padding-top: 20px;">{{ $t("start.download_software_text") }}:</p>

              <select v-if="level === 'higher'" class="form-select" v-model="software">
                <option value="orange_pi_zero2" selected>Orange Pi Zero 2</option>
                <option value="raspberry_pi">Raspberry Pi 2/3/4</option>
                <option value="latest_release">{{ $t("start.software_source_release") }}</option>
                <option value="main">{{ $t("start.software_source_latest") }}</option>
              </select>

              <div style="text-align: center; margin-top: 20px;">
              <a class="btn btn-primary my-button" :href="getUrl()">{{ $t("start.download") }}</a>
              </div>
    </div>

    <div class="col-md-3 col-xs-12 mb-1"  style="padding-top: 50px;">
              <h3 style="text-align: center;">4</h3>
              <h3 style="text-align: center;">{{ $t("start.build_and_learn") }}</h3>
              <p v-if="level === 'secondary'" style="padding-top: 20px;">{{ $t("start.build_and_learn_text") }} <a href="https://workshops.mirte.org/">{{ $t("start.workshops") }}</a>.</p>
              <p v-if="level === 'higher'" style="padding-top: 20px;">{{ $t("start.build_and_learn_text") }} <a href="https://docs.mirte.org/">{{ $t("start.documentation") }}</a>.</p>
    </div>
  </div>
</div>

  <div style="text-align: center;" v-else>
     <h1>{{ $t("start.coming_soon") }}</h1>
     <p>{{ $t("start.construction") }}</p>
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
    watch: {
      '$route.params': {
        handler(newValue) {
           this.$router.go()
        },
      }
    }
}


</script>

<template>
  <div id="app">
    <div class="data-wrap">
      myName: {{name}}
      date: {{time}}
    </div>
    <MobileTip />
    <div class="content-wrap">
      <img src="./assets/pc.jpg" alt="" class="pc">
      <img src="./assets/ipad.jpg" alt="" class="ipad">
      <img src="./assets/mobile.jpg" alt="" class="mobile">
    </div>
  </div>
</template>

<script>
import MobileTip from './components/MobileTip.vue'
import {myAjax} from './utils/myAjax'
export default {
  name: 'App',
  components: {
    MobileTip
  },
  data(){
    return {
      name: '',
      time: ''
    }
  },
  created(){
    myAjax('data.json').then((res)=>{
      const {name , time } = res
      this.name = name 
      this.time = time
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pc,.ipad,.mobile {
  width: 100%;
  height:100%;
  object-fit: fill;
}

@media only screen and (min-width : 768px) and (max-width : 1023px){
  .pc{
    display: none
  }
  .mobile{
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .ipad{
    display:none;
  }
  .mobile{
    display:none;
  }
}
@media screen and (max-width: 768px){
  .ipad{
    display: none;
  }
  .pc{
    display: none;
  }
}
</style>

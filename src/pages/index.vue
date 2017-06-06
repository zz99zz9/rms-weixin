<template>

  <div class="index" >
<ul><li @click="goto('/Pending')" class="li ls3 sbtn">客房服务</li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  },
  methods: {
	goto(v){
		this.$router.push(v)
	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{width:90%;margin-top:30px;padding:0;margin-left:5%;}
ul .li{display:block;height:80px;background-color:#000;color:#fff;line-height:80px;text-align:center;border-radius:4px;}
ul .li:active{background-color:#333;}
</style>

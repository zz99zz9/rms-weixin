<template>
  <div class="main">
  <div class='header'>
    <div class='pbtn' @click="goto('/Pending')"><span>未进行</span></div><div class='pbtn on'><span>进行中</span></div>
  </div>

<ul class='ser'>
<li @click="open"><span class="sroom">1001</span><i class="sico sico1"></i><span class="stxt">退房清扫</span></li>
<li><span class="sroom">1001</span><i class="sico sico2"></i><span class="stxt">退房清扫</span></li>
<li><span class="sroom">1001</span><i class="sico sico3"></i><span class="stxt">退房清扫</span></li>
<li><span class="sroom">1001</span><i class="sico sico4"></i><span class="stxt">退房清扫</span></li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {

    }
  },
  methods: {
    goto(v){
    this.$router.push(v)
  }, open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
   /*         this.$message({
              type: 'info',
              message: `action: ${ action }`
            });*/
          }
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{background-color:#f2f2f2;height:100%;width:100%;}

.pbtn{width:50%;float:left;display:block;font-size:17px;}
.pbtn.on span{font-weight:bold;color:#000;display:inline-block;position:relative;}
.pbtn.on span:after {content:'';position:absolute;width:100%;left:0;bottom:.01em;height:4px;background-color:#000;-webkit-transform-origin:50%;transform-origin:50%;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transition:.24s cubic-bezier(.8,0,.1,.81);transition:.24s cubic-bezier(.8,0,.1,.81);}

</style>

<template>
  <div id="app">
	<router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  created:function(){
	this.$router.push({path:'/HelloWorld'})
  },
  methods:{
  }
}
</script>
<style>
</style>

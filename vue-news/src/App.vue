<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar'

export default {
  components: {
    'tool-bar': ToolBar,
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}
#app{
  padding-top: 50px;
}
ul,ol{
	margin:0;
	padding:0;
}
li{
	border-bottom: 1px solid #ddd;
	margin:0;
	padding:10px 24px;
}
a{
  color:rgb(15, 37, 160);
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }
}
.user-link{
  text-decoration: none;
  font-size: 12px;
  color:rgb(30, 150, 50)
}
.page-enter-active, .page-leave-active {
  transition: opacity .3s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

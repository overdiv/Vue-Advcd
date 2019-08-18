<template>
  <div id="app">
    <tool-bar></tool-bar>
    <div>
      <button @click="loginUserAsync">Login</button><br>
      <ul>
        <li v-for="(item, idx) in items" :key="idx">
            {{ item }}
        </li>
      </ul>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar'
import Spinner from '@/components/Spinner'
import bus from '@/utils/bus'
import axios from 'axios'

export default {
  components: {
    'tool-bar': ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false,
      items: [],
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
    loginUser() {
			axios.get('https://jsonplaceholder.typicode.com/users/1')
				.then(res => {
					if (res.data.id === 1){
						axios.get('https://jsonplaceholder.typicode.com/todos')
							.then(res => {
                this.items = res.data;
							})
					}
				})
				.catch(err => console.log(err))
    },
    async loginUserAsync() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if (res.data.id === 1) {
          console.log(res)
          const list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = list.data;
        }
      } catch (error) {
        console.log(error)
      }
      
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
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

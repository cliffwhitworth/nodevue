const index = {
    delimiters: ['${', '}'],
    data() {
      return {
        msg: 'Hello World!'
      };
    }
  };
  
  Vue.createApp(index).mount('#index');
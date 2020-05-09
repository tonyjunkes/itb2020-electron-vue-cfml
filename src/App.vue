<template>
  <div id="q-app" v-if="ready">
    <router-view :key="componentKey" />
  </div>
  <div class="absolute-center" v-else>
    <div v-if="message.length">{{message}}</div>
    <div class="text-center" v-else>
      <q-spinner
        color="primary"
        size="10em"
      />
      <h3>Loading...</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      pingID: null,
      ready: false,
      componentKey: 0,
      errorCount: 0,
      message: ''
    };
  },
  beforeMount() {
    // Ping the server until it starts, once it does, reload main component
    this.pingID = setInterval(this.ping, 1000);
  },
  methods: {
    ping() {
      if (this.errorCount >= 100) {
        this.message = 'Unable to start the CommandBox server.';
        return;
      }
      this.$axios.get(this.$q.electron.remote.getGlobal('application').api.uri)
        .then((response) => {
          if (response.status === 200) {
            clearInterval(this.pingID);
            this.ready = true;
            this.componentKey += 1;
          } else {
            this.errorCount += 1;
          }
        })
        .catch(() => {
          this.errorCount += 1;
        });
    }
  }
};
</script>

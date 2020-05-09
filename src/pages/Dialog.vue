<template>
  <q-page>
    <div class="absolute-center text-center">
      <div class="q-pa-md q-gutter-sm">
        <q-btn @click="triggerDialog" color="deep-orange" label="Click Me" />
      </div>
    </div>
    <div class="absolute-top text-center">
      <div class="q-pa-md q-gutter-sm">
        <router-link to="/">
          <q-btn color="deep-orange" label="HOME" />
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Dialog',
  methods: {
    triggerDialog() {
      this.$axios.get(this.$q.electron.remote.getGlobal('application').api.uri)
        .then((response) => {
          this.$q.electron.ipcRenderer.send('show-alert', {
            type: 'warning',
            title: 'Warning',
            message: 'You have a message:',
            detail: response.data.data,
            buttons: []
          });
        });
    }
  }
};
</script>

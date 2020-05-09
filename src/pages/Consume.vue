<template>
  <q-page>
    <div class="absolute-center text-center">
      <div class="q-pa-md q-gutter-sm">
        <q-btn @click="loadData" color="deep-orange" label="Click Me" />
      </div>
      <h2>{{message}}</h2>
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
  name: 'Consume',
  data() {
    return { message: 'Nothing to see here...' };
  },
  methods: {
    loadData() {
      this.$axios.get(this.$q.electron.remote.getGlobal('application').api.uri)
        .then((response) => {
          this.message = response.data.data;
        })
        .catch(() => {
          this.message = 'Could not connect to API!';
        });
    }
  }
};
</script>

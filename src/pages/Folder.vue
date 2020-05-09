<template>
  <q-page>
    <div class="absolute-center text-center">
      <div class="q-pa-md q-gutter-sm">
        <q-btn @click="openDocsFolder" color="deep-orange" label="Open Docs" />
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
  name: 'Folder',
  methods: {
    openDocsFolder() {
      const docPath = `${this.$q.electron.remote.getGlobal('application').paths.docs}`;
      this.$q.electron.shell.openItem(docPath);
    }
  }
};
</script>

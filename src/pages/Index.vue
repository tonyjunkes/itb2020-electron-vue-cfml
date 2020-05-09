<template>
  <q-page>
    <div class="absolute-center text-center">
      <router-link to="/cosume-example">
        <q-btn class="q-ma-sm" color="primary" icon="message" label="Consume" />
      </router-link>
      <router-link to="/dialog-example">
        <q-btn class="q-ma-sm" color="primary" icon="feedback" label="Dialog" />
      </router-link>
      <router-link to="/folder-example">
        <q-btn class="q-ma-sm" color="primary" icon="folder_open" label="Folder" />
      </router-link>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
};
</script>

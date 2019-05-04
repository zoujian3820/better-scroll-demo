<template>
  <page :title="$t('examples.picker')" :desc="$t('pickerPage.desc')">
    <div slot="content">
      <picker-render></picker-render>
    </div>
  </page>
</template>

<script >
  import Page from '@/components/page/page.vue'
  import PickerRender from '@/page-render/picker-render.vue'

  export default {
    components: {
      Page,
      PickerRender
    }
  }
</script>

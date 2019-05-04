<template>
  <page :title="$t('examples.formList')" :desc="$t('formListPage.desc')">
    <div slot="content">
      <form-list-render></form-list-render>
    </div>
  </page>
</template>

<script >
  import Page from '@/components/page/page.vue'
  import FormListRender from '@/page-render/form-list-render.vue'

  export default {
    components: {
      Page,
      FormListRender
    }
  }
</script>

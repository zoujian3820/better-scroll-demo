<template>
  <page :title="$t('examples.goodsList')">
    <div slot="content">
      <good-list-render></good-list-render>
    </div>
  </page>
</template>

<script>
  import Page from '@/components/page/page.vue'
  import GoodListRender from '@/page-render/goods-list-render.vue'

  export default {
    components: {
      Page,
      GoodListRender
    }
  }
</script>

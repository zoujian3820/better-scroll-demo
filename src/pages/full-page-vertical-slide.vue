<template>
  <full-page-slide :data="items" @finish="finish"></full-page-slide>
</template>

<script >
  import FullPageSlide from '../components/full-page-slide/full-page-vertical-slide.vue'

  export default {
    data() {
      return {
        items: [
          require('../common/images/spring.jpeg'),
          require('../common/images/summer.jpeg'),
          require('../common/images/fall.jpeg'),
          require('../common/images/winter.jpeg')
        ]
      }
    },
    components: {
      FullPageSlide
    },
    methods: {
      finish() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>

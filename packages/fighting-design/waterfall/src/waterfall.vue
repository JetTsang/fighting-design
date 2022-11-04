<script lang="ts" setup name="FWaterfall">
  import { Props, Emits } from './props'
  import type { WaterfallPropsType } from './props'

  const prop: WaterfallPropsType = defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-waterfall">
    FWaterfall
  </div>
</template>

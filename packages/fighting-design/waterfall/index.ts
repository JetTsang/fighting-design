import Waterfall from './src/waterfall.vue'

import { install } from '../_utils'

export const FWaterfall = install(Waterfall)

export type WaterfallInstance = InstanceType<typeof Waterfall>

export * from './src/interface.d'

export default Waterfall

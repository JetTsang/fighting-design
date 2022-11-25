import type { ExtractPropTypes, PropType } from 'vue'
import type { DatePickerSizeType } from './interface'

export const Props = {
  /**
   * 绑定值
   */
  date: {
    type: String,
    default: (): null => null
  },
  /**
   * 是否只读
   */
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否可清除
   */
  clear: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<DatePickerSizeType>,
    default: (): DatePickerSizeType => 'middle' as const,
    validator: (val: DatePickerSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 时间格式
   */
  format: {
    type: String,
    default: (): string => 'YYYY/MM/DD' as const
  }
} as const

export type DatePickerPropsType = ExtractPropTypes<typeof Props>

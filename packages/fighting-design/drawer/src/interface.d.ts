export type { DrawerPropsType } from './props'

export type DrawerDirectionType = 'left' | 'top' | 'right' | 'bottom'

export interface DrawerCallbackInterface {
  (evt: MouseEvent): void
}
export type { AlertPropsType } from './props'

export type AlertType = 'primary' | 'success' | 'danger' | 'warning' | 'default'

export type AlertOverflowType = 'hidden' | ''

export interface AlertCloseEndInterface {
  (evt: MouseEvent): void
}
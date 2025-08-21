import type { ReactNode } from 'react'

export interface ParagraphProps {
	children: ReactNode
	appearance?: 'small' | 'normal' | 'big'
}

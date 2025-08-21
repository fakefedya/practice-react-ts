import type { ParagraphProps } from './Paragraph.props'
import styles from './Paragraph.module.css'
import cn from 'classnames'

function Paragraph({ children, appearance = 'normal' }: ParagraphProps) {
	return (
		<p className={cn(styles[appearance], styles['paragraph'])}>{children}</p>
	)
}
export default Paragraph

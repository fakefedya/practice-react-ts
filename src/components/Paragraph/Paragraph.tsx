import type { ParagraphProps } from './Paragraph.props'
import styles from './Paragraph.module.css'

function Paragraph({ children, appearance = 'small' }: ParagraphProps) {
	return <p className={(styles[appearance], styles.paragraph)}>{children}</p>
}
export default Paragraph

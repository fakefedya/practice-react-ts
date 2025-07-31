import type { SectionProps } from './Section.props'

import styles from './Section.module.css'

function Section({ children, classname = 'section' }: SectionProps) {
	return <section className={styles[classname]}>{children}</section>
}

export default Section

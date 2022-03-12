import { LayoutType } from '../../Types/Types'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from '../../StyleSheets/Layout.module.css'
import '../../../node_modules/antd/dist/antd.css'

export default function Layout(props: LayoutType) {
	return (
		<div className={styles.wrap}>
			<div className='site-layout-content'>
				<Header />
				{props.children}
				<Footer />
			</div>
		</div>
	)
}

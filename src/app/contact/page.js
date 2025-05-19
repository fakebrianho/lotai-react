'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { usePrismicQuery } from '@/hooks/usePrismicData'
export default function Contact(props) {
	const { data, isLoading } = usePrismicQuery({
		type: 'contact',
	})
	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<section className={styles.container}>
			<div className={styles.contact}>
				<div className={styles.inner}>
					<div className={styles.contactInfo}>
						<h1>CONTACT INFO</h1>
						<h4>Email:</h4>
						<p className={styles.email}>
							{data?.data?.slices[0].primary.Contact_Email1}
						</p>
						<p className={styles.email2}>
							{data?.data?.slices[0].primary.Contact_Email2}
						</p>

						<h4>Show/Performance Booking:</h4>
						<p>{data?.data?.slices[0].primary.Contact_BookingNA}</p>
						<p>{data?.data?.slices[0].primary.Contact_BookingEU}</p>
					</div>
				</div>
			</div>
			<div className={styles.glass}></div>
			<div
				className={styles.text}
				style={{
					fontSize: '2em',
					animation: 'scrollText 4s linear infinite',
					top: '10%',
				}}
			>
				Contact
			</div>
			<div
				className={styles.text}
				style={{
					fontSize: '3em',
					animation: 'scrollText 6s linear infinite',
					top: '20%',
				}}
			>
				Contact
			</div>
			<div
				className={styles.text}
				style={{
					fontSize: '1.5em',
					animation: 'scrollText 3.5s linear infinite',
					top: '30%',
				}}
			>
				Contact
			</div>
			<div
				className={styles.text}
				style={{
					fontSize: '4em',
					animation: 'scrollText 6.3s linear infinite',
					top: '40%',
				}}
			>
				Contact
			</div>
			<div
				className={styles.text}
				style={{
					fontSize: '2.5em',
					animation: 'scrollText 8s linear infinite',
					top: '50%',
				}}
			>
				Contact
			</div>
			<div
				className={styles.text}
				style={{
					fontSize: '3.5em',
					animation: 'scrollText 2.8s linear infinite',
					top: '60%',
				}}
			>
				Contact
			</div>
			<div
				className={styles.text}
				style={{
					fontSize: '1.8em',
					animation: 'scrollText 10s linear infinite',
					top: '70%',
				}}
			>
				Contact
			</div>
			<div
				className={styles.text}
				style={{
					fontSize: '2.2em',
					animation: 'scrollText 6.7s linear infinite',
					top: '80%',
				}}
			>
				Contact
			</div>
		</section>
	)
}

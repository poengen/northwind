import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Main from '../components/main';

export default function Home({ orders, customers }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Northwind Orders</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
			<Main orders={orders} customers={customers}></Main>
		</div>
	);
}

export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`https://northwind.now.sh/api/orders/`);
	const orders = await res.json();

	const res2 = await fetch(`https://northwind.now.sh/api/customers/`);
	const customers = await res2.json();

	// Pass data to the page via props
	return { props: { orders, customers } };
}

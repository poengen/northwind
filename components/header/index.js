import React from 'react';
import styles from './index.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<h1>Northwind Orders</h1>
		</header>
	);
}

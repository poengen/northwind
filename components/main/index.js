import React from 'react';
import styles from './index.module.css';
import { DataGrid } from '@material-ui/data-grid';

export default function Main({data}) {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 100},
		{ field: 'shipName', headerName: 'Ship Name', width: 250},
		{ field: 'street', headerName: 'Street', width: 200},
		{ field: 'city', headerName: 'City', width: 120},
		{ field: 'country', headerName: 'Country', width: 120},
		{ field: 'orderDate', headerName: 'Order Date', width: 200},
		{ field: 'shippedDate', headerName: 'Shipped Date', width: 200},
		{ field: 'numberOfProducts', headerName: 'Number Of Products', width: 210},
	  ];

	const rows = [];

	data.forEach(el => {
		rows.push({
			id: el.id,
			shipName: el.shipName,
			street: el.shipAddress.street,
			city: el.shipAddress.city,
			country: el.shipAddress.country,
			orderDate: el.orderDate,
			shippedDate: el.shippedDate,
			numberOfProducts: el.details.length
		})
	});

	return (
		<main className={styles.main}>
					<div style={{ height: 1000, width: '100%', 'background-color': '#ffffff' }}>
		  <DataGrid rows={rows} columns={columns} pageSize={50} checkboxSelection />
		</div>
		</main>
	);
}

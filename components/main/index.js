import React from 'react';
import styles from './index.module.css';
import { DataGrid } from '@material-ui/data-grid';

export default function Main({ orders, customers }) {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 100 },
		{ field: 'shipName', headerName: 'Ship Name', width: 250 },
		{ field: 'street', headerName: 'Street', width: 200 },
		{ field: 'city', headerName: 'City', width: 120 },
		{ field: 'country', headerName: 'Country', width: 120 },
		{ field: 'orderDate', headerName: 'Order Date', width: 200 },
		{ field: 'shippedDate', headerName: 'Shipped Date', width: 200 },
		{ field: 'numberOfProducts', headerName: 'Number Of Products', width: 210 },
		{ field: 'customerName', headerName: 'Customer Contact Name', width: 210 }
	];

	let rows = [];

	orders.forEach((el) => {
		rows.push({
			id: el.id,
			shipName: el.shipName,
			street: el.shipAddress.street,
			city: el.shipAddress.city,
			country: el.shipAddress.country,
			orderDate: el.orderDate,
			shippedDate: el.shippedDate,
			numberOfProducts: el.details.length,
			customerName:
				customers[customers.findIndex((el2) => el2.id == el.customerId)]
					.contactName // Finner index j slik at customers[j].id == orders[i].customerId for alle i
		});
	});

	return (
		<main className={styles.main}>
			<div style={{ height: 1000, width: '100%', backgroundColor: '#ffffff' }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={50}
					checkboxSelection
				/>
			</div>
		</main>
	);
}

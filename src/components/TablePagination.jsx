import React from 'react';

import { Container, Button } from '../styles/components/TablePagination.js';

const TablePagination = ({ slice, range, setPage, page }) => {
	return (
		<Container>
			<Button
				className="left"
				onClick={() => {
					page > 1 && setPage(page - 1);
				}}
			></Button>
			{slice.map((el, index) => (
				<button
					key={index}
					className={`${page === el && 'active'}`}
					onClick={() => setPage(el)}
				>
					{el}
				</button>
			))}
			<Button
				className="right"
				onClick={() => {
					page < range.length && setPage(page + 1);
				}}
			></Button>
		</Container>
	);
};

export default TablePagination;

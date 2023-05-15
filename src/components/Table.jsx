import React from 'react';
import { Error } from './../styles/views/Authentication.js';

import { TableContainer, Wrapper } from '../styles/components/Table.js';
import TablePagination from './TablePagination.jsx';
import useTable from '../hooks/useTable.js';

const Table = ({
	data,
	total,
	page,
	setPage,
	error,
	isLoading,
	rowsPerPage,
	viewCharacter,
}) => {
	const { slice, range } = useTable(total, page, rowsPerPage);
	return (
		<>
			<Wrapper>
				<TableContainer>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Descrição</th>
							<th>Última atualização</th>
						</tr>
					</thead>

					<tbody className={`${isLoading && 'loading'}`}>
						{data.map((el) => (
							<tr key={el.id} onClick={() => viewCharacter(el)}>
								<td>{el.name}</td>
								<td>{el.description}</td>
								<td>{el.modified}</td>
							</tr>
						))}
					</tbody>
				</TableContainer>

				{error && <Error>{error}</Error>}
				{!isLoading && (
					<TablePagination
						range={range}
						slice={slice}
						total={total}
						setPage={setPage}
						page={page}
					/>
				)}
			</Wrapper>
		</>
	);
};

export default Table;

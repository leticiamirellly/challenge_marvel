import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 20px 40px;
`;

export const TableContainer = styled.table`
	border-collapse: collapse;
	width: 100%;
	margin: 20px 0;

	thead {
		border-radius: 10px;
	}
	th {
		background-color: #f1f1f1;
		padding: 12px;
		font-weight: 500;
		text-align: left;
		font-size: 14px;
		color: #2c3e50;
		&:first-child {
			border-top-left-radius: 15px;
		}
		&:last-child {
			border-top-right-radius: 15px;
		}
	}
	tr {
		cursor: auto;
		&:hover {
			cursor: pointer;
			background-color: #f1f1f1;
			td {
				color: #2c3e50;
			}
		}
	}
	tbody {
		&.loading {
			background-color: rgba(44, 62, 80, 0.5);
			animation: fade 3s infinite;
			td {
				color: #fff;
			}
		}
		@keyframes fade {
			from {
				background-color: rgba(44, 62, 80, 0.3);
			}
			to {
				background-color: rgba(44, 62, 80, 0.1);
			}
		}
		td {
			padding: 12px;
			font-size: 14px;
			color: grey;
		}
	}
`;

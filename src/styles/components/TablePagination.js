import styled from 'styled-components';

export const Container = styled.div`
	background-color: #f1f1f1;
	padding: 8px 0px;
	width: 100%;
	font-weight: 500;
	text-align: left;
	font-size: 16px;
	color: #2c3e50;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 20px 0;

	button {
		border: none;
		padding: 7px 14px;
		border-radius: 10px;
		cursor: pointer;
		margin-right: 4px;
		margin-left: 4px;
		&.active {
			color: white;
			background: #185adb;
		}
		&:hover {
			background-color: #cecece;
		}
	}
`;

export const Button = styled.button`
	&::before {
		border-style: solid;
		border-width: 0.25em 0.25em 0 0;
		content: '';
		display: inline-block;
		height: 0.45em;
		position: relative;
		top: 0.15em;
		vertical-align: top;
		width: 0.45em;
	}
	&:hover {
		background-color: #cecece;
	}
	&.left {
		:before {
			left: 0.25em;
			transform: rotate(-135deg);
		}
	}
	&.right {
		&:before {
			left: 0;
			transform: rotate(45deg);
		}
	}
`;

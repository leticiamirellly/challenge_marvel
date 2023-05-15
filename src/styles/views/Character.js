import styled from 'styled-components';

export const Container = styled.div`
	padding: 20px 40px;
`;

export const Header = styled.header`
	display: flex;

	section {
		width: 100%;
		margin-left: 20px;
		border: 1px solid #f1f1f1;
		border-radius: 8px;
		padding: 10px;
		max-height: 400px;
		overflow-y: auto;
		& > h1 {
			margin-bottom: 10px;
		}
	}
	img {
		width: 200px;
		object-fit: cover;
		border-radius: 8px;
	}
	h1 {
		font-size: 2rem;
	}
`;

export const ButtonBack = styled.button`
	background-color: #008bfe;
	padding: 8px 16px;
	border-radius: 8px;
	border: none;
	font-weight: bold;
	color: #fff;
	cursor: pointer;
	margin-top: 10px;
	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
`;

export const ComicsSection = styled.section`
	margin-top: 10px;
	text-align: center;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const Container = styled.div`
	max-width: 500px;
	width: 100%;
	padding: 40px 20px;

	h1 {
		font-size: 2rem;
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
	}

	input {
		width: 100%;
		padding: 12px;
		border: 1px solid #ccc;
		border-radius: 4px;
		resize: vertica;
		margin-bottom: 20px;
	}

	button {
		background-color: #008bfe;
		padding: 8px 16px;
		border-radius: 8px;
		border: none;
		font-weight: bold;
		color: #fff;
		align-self: center;
		cursor: pointer;
		margin-top: 5px;
		&:disabled {
			pointer-events: none;
			opacity: 0.5;
		}
	}
`;

export const Error = styled.span`
	background-color: rgba(255, 148, 148, 0.5);
	color: red;
	padding: 10px;
	border-radius: 8px;
`;

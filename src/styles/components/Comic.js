import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	margin: 20px 0;
	border: 1px solid rgb(241, 241, 241);
	border-radius: 8px;
	padding: 10px;
	text-align: left;
	img {
		width: 100px;
	}
`;

export const ContentDescriptions = styled.div`
	width: 100%;
	padding: 10px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Description = styled.p`
	margin-top: 20px;
`;

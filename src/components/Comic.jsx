import React from 'react';
import {
	Card,
	Description,
	Header,
	ContentDescriptions,
} from '../styles/components/Comic.js';

const Comic = ({ items }) => {
	return items.map((item) => {
		return (
			<Card key={item.id}>
				<img
					src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
					alt="comic thumbnail"
				/>
				<ContentDescriptions>
					<Header>
						<span>
							<strong>Título: </strong> {item.title}{' '}
						</span>
						<span>
							<strong> Número da capa:</strong> {item.issueNumber}
						</span>
					</Header>
					<Description>{item.description}</Description>
				</ContentDescriptions>
			</Card>
		);
	});
};

export default Comic;

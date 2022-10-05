import React from 'react';
import { useParams } from 'react-router-dom';

const LodgingPage = () => {
	let { id } = useParams();
	// filter() pour garder l'id

	return <div>Lodging Page {id}</div>;
};

export default LodgingPage;

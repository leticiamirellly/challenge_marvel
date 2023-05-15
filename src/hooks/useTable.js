import { useState, useEffect } from 'react';

const calculateRange = (total, rowsPerPage) => {
	const range = [];
	const num = Math.ceil(total / rowsPerPage);
	for (let i = 1; i <= num; i++) {
		range.push(i);
	}
	return range;
};

const sliceData = (range, page) => {
	return range.splice(page - 1, 5);
};

const useTable = (total, page, rowsPerPage) => {
	const [tableRange, setTableRange] = useState([]);
	const [slice, setSlice] = useState([]);

	useEffect(() => {
		const range = calculateRange(total, rowsPerPage);
		setTableRange([...range]);

		const slice = sliceData(range, page);
		setSlice([...slice]);
	}, [setTableRange, page, setSlice]);
	return { slice, range: tableRange };
};

export default useTable;

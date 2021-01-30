export const dateChange = (date) => {
	const beforeDate = date;
	const formatted = `${beforeDate.getFullYear()}-${
		beforeDate.getMonth() + 1
	}-${beforeDate.getDate()}`.replace(/\n|\r/g, "");
	return formatted;
};

export const japaneseDateChange = (date) => {
	const beforeDate = date;
	const formatted = `${beforeDate.getFullYear()}年${
		beforeDate.getMonth() + 1
	}月${beforeDate.getDate()}日`.replace(/\n|\r/g, "");
	return formatted;
};

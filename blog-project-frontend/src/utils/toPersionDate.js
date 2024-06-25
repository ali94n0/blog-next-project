const toPersionDate = (date) => {
	const postCreatedDate = new Date(date).toLocaleDateString("fa-ir");
	return postCreatedDate;
};

export default toPersionDate;

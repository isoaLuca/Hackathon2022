
export const localSave = (result) => {
	if (result) {
		result.save();
	}

	window.server && window.server.db._collections.forEach((collection) => {
		localStorage.setItem(collection.name,
			JSON.stringify(collection._records));
	});
};

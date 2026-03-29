export const getSortedProjectImages = (assetCollection, folder, priorityName) => {
	// 1. Get the entries (Path as key, ID as value)
	const entries = Object.entries(assetCollection).filter(([path]) => path.includes(`/${folder}/`));

	// 2. Sort the entries based on the file path (the key)
	entries.sort(([pathA], [pathB]) => {
		if (!priorityName) return pathA.localeCompare(pathB);

		const isA = pathA.toLowerCase().includes(priorityName.toLowerCase());
		const isB = pathB.toLowerCase().includes(priorityName.toLowerCase());

		if (isA) return -1;
		if (isB) return 1;

		// Default to alphabetical for everything else
		return pathA.localeCompare(pathB);
	});

	// 3. Return only the transformed IDs (the values)
	return entries.map(([_, module]) => module).filter(Boolean);
};

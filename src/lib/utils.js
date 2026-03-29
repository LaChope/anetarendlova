/**
 * Filters a glob collection by a specific directory name.
 * @param {Object} assetCollection - The object returned by import.meta.glob.
 * @param {string} folderName - The project slug/folder name.
 * @returns {Array} - Array of resolved asset paths.
 */
export const filterAssetsByFolder = (assetCollection, folderName) => {
	return Object.entries(assetCollection)
		.filter(([path]) => path.includes(`/${folderName}/`))
		.map(([_, module]) => module);
};

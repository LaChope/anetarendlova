import { filterAssetsByFolder } from './utils.js';

export const SITE_TITLE = 'anetarendlova';

export const NAVIGATION_LINKS = [
	{ href: '/architecture', label: 'architecture' },
	{ href: '/interiors', label: 'interiors' },
	{ href: '/studio', label: 'studio' }
];

const allImages = import.meta.glob('$lib/assets/projects/**/*.{jpg,png,JPG,PNG}', {
	query: { format: 'webp' },
	import: 'default',
	eager: true
});

const PROJECTS_DATA = [
	{ id: 1, slug: 'SKY', title: 'SKY', program: 'Office' },
	{ id: 2, slug: 'CIS', title: 'CIS', program: 'School' },
	{ id: 3, slug: 'KNP', title: 'KNP', program: 'Library' },
	{ id: 4, slug: 'SSP', title: 'SSP', program: 'Exhibition' }
];

export const PORTFOLIO_PROJECTS = PROJECTS_DATA.map((project) => {
	const images = filterAssetsByFolder(allImages, project.slug);

	return {
		...project,
		imageUrl: images[0] || '',
		images: images,
		details: [
			{ label: 'Program', value: 'Office' },
			{ label: 'Stage', value: 'Built' },
			{ label: 'Location', value: 'Bratislava' },
			{ label: 'Usable area', value: '250 m2' },
			{ label: 'Year', value: '2022' },
			{ label: 'Team', value: 'Peter Kuklica, Martin Smerek, Erik Horňáček' },
			{ label: 'Photograph', value: 'Matej Hakár' }
		],
		text: 'We insert a plateau and a box of closed offices into the vertical space. We take advantage of the height of the space as well as its technical character. All elements are purely functional and expressively left in their basic state. The plateau area complements the office programme with a rest area.'
	};
});

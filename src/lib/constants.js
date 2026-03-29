export const SITE_TITLE = 'anetarendlova';

export const NAVIGATION_LINKS = [
	{ href: '/architecture', label: 'architecture' },
	{ href: '/interiors', label: 'interiors' },
	{ href: '/studio', label: 'studio' }
];

const skyGlob = import.meta.glob('$lib/assets/SKY/*.{jpg,png}', {
	query: { format: 'webp' },
	import: 'default',
	eager: true
});

const skyImages = Object.values(skyGlob);

export const PORTFOLIO_PROJECTS = [
	{
		id: 1,
		slug: 'SKY',
		title: 'SKY',
		imageUrl: skyImages.length > 0 && skyImages[0],
		images: Object.values(skyImages),
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
	},
	{
		id: 2,
		slug: 'CIS',
		title: 'CIS',
		imageUrl: '/images/CIS/CIS-STU-INT-jidelna-01.png',
		images: [
			'/images/CIS/CIS-STU-INT-jidelna-01.png',
			'/images/CIS/CIS-STU-INT-cafeterie-01.png',
			'/images/CIS/CIS_STU_INT_atrium_TERAKOTA_03.png',
			'/images/CIS/CIS_STU_INT_arthouse_dilna.jpg',
			'/images/CIS/CIS_STU_INT_arthouse_hudebka-4-caramel.png',
			'/images/CIS/CIS_STU_INT_atrium_GREEN_02.png',
			'/images/CIS/CIS_STU_INT_lobby-02.png',
			'/images/CIS/CIS_STU_INT_lobby-telocvicna-01.png',
			'/images/CIS/CIS_STU_INT_ucebna.png',
			'/images/CIS/CIS_STU_INT_Y7_BAFFLES_01.png'
		],
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
	},
	{
		id: 3,
		slug: 'KNP',
		title: 'KNP',
		imageUrl: '/images/KNP/CAM_ENTRY.jpg',
		images: [
			'/images/KNP/CAM_ENTRY.jpg',
			'/images/KNP/CAM_MEETING ROOM.jpg',
			'/images/KNP/CAM_ENTRY_02.jpg',
			'/images/KNP/CAM_KIDS LIBRARY.jpg',
			'/images/KNP/CAM_LIBRARY.jpg'
		],
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
	},
	{
		id: 4,
		slug: 'SSP',
		title: 'SSP',
		imageUrl: '/images/SSP/SSP_STU_INT_vystava-00.png',
		images: [
			'/images/SSP/SSP_STU_INT_vystava-00.png',
			'/images/SSP/SSP_STU_INT_atrium-detail-00.png',
			'/images/SSP/SSP_STU_INT_recepce-00.png',
			'/images/SSP/SSP_STU_INT_satny-01.png',
			'/images/SSP/SSP_STU_INT_telocvicna.png',
			'/images/SSP/SSP_STU_INT_ucebna-01.png'
		],
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
	}
];

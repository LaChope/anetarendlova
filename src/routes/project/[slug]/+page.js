import { PORTFOLIO_PROJECTS } from '$lib/constants.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const project = PORTFOLIO_PROJECTS.find((p) => p.slug === params.slug);

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
}

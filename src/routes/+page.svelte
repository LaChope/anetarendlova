<script>
	import { PORTFOLIO_PROJECTS } from '$lib/constants.js';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="grid">
	{#each PORTFOLIO_PROJECTS as project (project.id)}
		<ProjectCard {project} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--spacing-unit, 2rem);
		padding: var(--spacing-unit, 2rem);
	}
</style>

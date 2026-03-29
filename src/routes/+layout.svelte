<script>
	import '../app.css';
	import { SITE_TITLE, NAVIGATION_LINKS } from '$lib/constants.js';

	let { children } = $props();
</script>

<nav class="navigation">
	<div class="logo">{SITE_TITLE}</div>
	<div class="links">
		{#each NAVIGATION_LINKS as link}
			<a href={link.href}>{link.label}</a>
		{/each}
	</div>
</nav>

<main>
	{@render children()}
</main>

<style>
	.navigation {
		display: flex;
		justify-content: space-between;
		padding: var(--spacing-unit, 2rem);
		font-size: 1rem;
	}

	.logo {
		font-weight: bold;
	}

	.links {
		display: flex;
		gap: 4rem;
	}

	a {
		font-weight: bold;
	}
</style>

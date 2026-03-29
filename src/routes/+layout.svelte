<script>
	import '../app.css';
	import { SITE_TITLE, NAVIGATION_LINKS } from '$lib/constants.js';

	let { children } = $props();
</script>

<div class="container">
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
</div>

<style>
	.container {
		padding: 2rem var(--padding-lateral);
	}

	.navigation {
		display: flex;
		justify-content: space-between;
		margin-bottom: var(--margin-header);
		font-size: 0.85rem;
	}

	.logo {
		font-weight: 700;
	}

	.links {
		display: flex;
		gap: 6rem;
	}

	a {
		font-weight: 400;
		transition: opacity 0.2s ease;
	}

	a:hover {
		opacity: 0.5;
	}
</style>

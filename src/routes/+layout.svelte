<script>
	import '../app.css';
	import { SITE_TITLE, NAVIGATION_LINKS } from '$lib/constants.js';
	import { page } from '$app/state';
	import { fade, fly } from 'svelte/transition';

	let { children } = $props();

	// Define state for the menu toggle
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<div class="container">
	<header class="header">
		<a href="/" class="logo">{SITE_TITLE}</a>

		<button class="hamburger" onclick={toggleMenu} aria-label="Toggle menu">
			{isMenuOpen ? 'Close' : 'Menu'}
		</button>

		<nav class="navigation" class:is-open={isMenuOpen}>
			<div class="links">
				{#each NAVIGATION_LINKS as link}
					<a href={link.href} onclick={() => (isMenuOpen = false)}>{link.label}</a>
				{/each}
			</div>
		</nav>
	</header>

	<main class="content">
		{#key page.url.pathname}
			<div in:fly={{ y: 15, duration: 400, delay: 200 }} out:fade={{ duration: 200 }}>
				{@render children()}
			</div>
		{/key}
	</main>
</div>

<style>
	.container {
		padding: 2rem var(--padding-lateral);
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--margin-header);
		position: relative;
	}

	.logo {
		font-weight: 700;
		font-size: 0.85rem;
		z-index: 10; /* Ensure visibility above menu */
	}

	.hamburger {
		display: block;
		background: none;
		border: none;
		font-size: 0.85rem;
		font-family: inherit;
		cursor: pointer;
		z-index: 10;
		padding: 0;
	}

	.navigation {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background-color: var(--color-background);
		padding-top: 2rem;
		z-index: 5;
	}

	/* Show navigation when state is true */
	.navigation.is-open {
		display: block;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		font-size: 0.85rem;
	}

	a {
		font-weight: 400;
		transition: opacity 0.2s ease;
	}

	a:hover {
		opacity: 0.5;
	}

	.content {
		position: relative;
	}

	/* Desktop adjustments */
	@media (min-width: 768px) {
		.hamburger {
			display: none;
		}

		.navigation {
			display: block;
			position: static;
			padding-top: 0;
			width: auto; /* Resets width to allow space-between alignment */
		}

		.links {
			flex-direction: row;
			gap: 6rem;
		}
	}
</style>

<script>
	let { project } = $props();
</script>

<article class="card">
	<div class="container">
		<img src={project.imageUrl} alt={project.title} class="image" />
	</div>
	<p class="caption">{project.title}</p>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
	}

	.container {
		width: 100%;
		aspect-ratio: 3 / 4;
		background-color: #e0e0e0;
		margin-bottom: 1rem;
		overflow: hidden;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.caption {
		font-size: 0.65rem;
		color: #999999;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin: 0;
	}
</style>

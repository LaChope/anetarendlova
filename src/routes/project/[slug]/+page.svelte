<script>
	let { data } = $props();
	let project = $derived(data.project);
</script>

<div class="project-layout">
	<div class="image-column">
		{#each project.images as imagePath}
			<img src={imagePath} alt={project.title} class="project-image" />
		{/each}
	</div>

	<div class="info-column">
		<h1 class="title">{project.title}</h1>

		<dl class="metadata">
			{#each project.details as detail}
				<div class="detail-row">
					<dt>{detail.label}:</dt>
					<dd>{detail.value}</dd>
				</div>
			{/each}
		</dl>

		<p class="description">{project.text}</p>
	</div>
</div>

<style>
	.project-layout {
		display: grid;
		grid-template-columns: 65% 1fr;
		gap: 4rem;
		align-items: start;
	}

	.image-column {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.project-image {
		width: 100%;
		height: auto;
		display: block;
	}

	.info-column {
		position: sticky;
		top: 2rem;
		font-size: 0.85rem;
		line-height: 1.5;
	}

	.title {
		font-size: 0.85rem;
		font-weight: 700;
		margin-top: 0;
		margin-bottom: 2rem;
	}

	.metadata {
		margin: 0 0 2rem 0;
	}

	.detail-row {
		display: flex;
		gap: 0.25rem;
		margin-bottom: 0.5rem;
	}

	dt {
		font-weight: 700;
	}

	dd {
		margin: 0;
	}

	.description {
		margin: 0;
	}
</style>

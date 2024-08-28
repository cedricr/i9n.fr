<script lang="ts">
	import projects from '$lib/projects/projects';
	import ProjectViewer from '$lib/project-viewer.svelte';
</script>

<svelte:head>
	<title>Instigation</title>
	<meta name="description" content="Lorem Ipsum" />
</svelte:head>

<div class="flex flex-col gap-8 md:gap-12">
	{#each Object.entries(projects) as [slug, data], idx}
		<ProjectViewer {idx} {slug} {data} short />
	{/each}
</div>

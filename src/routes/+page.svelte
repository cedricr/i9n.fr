<script lang="ts">
	import projects from '$lib/projects/projects';
	import ProjectThumbnail from '$lib/project-thumbnail.svelte';
</script>

<svelte:head>
	<title>Instigation</title>
</svelte:head>

<div class="m-auto flex max-w-4xl flex-col gap-8 md:gap-20">
	{#each Object.entries(projects) as [slug, data], idx}
		<ProjectThumbnail {idx} {slug} {data} />
	{/each}
</div>

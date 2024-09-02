<script lang="ts">
	import ProjectViewer from '$lib/project-details.svelte';
	import projects from '$lib/projects/projects.js';
	import type { Project } from '$lib/types';
	import ProjectDetails from '$lib/project-details.svelte';

	let { data } = $props();
	const slug = data.slug;
	const project: Project = projects[slug];
</script>

<ProjectDetails idx={0} {slug} data={project} />

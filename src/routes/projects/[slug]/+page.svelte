<script lang="ts">
	import showdown from 'showdown';
	import ProjectViewer from '$lib/project-details.svelte';
	import projects from '$lib/projects/projects.js';
	import type { Project } from '$lib/types';
	import ProjectDetails from '$lib/project-details.svelte';

	let { data } = $props();
	const slug = data.slug;
	const converter = new showdown.Converter();
	const project: Project = projects[slug];
</script>

<ProjectDetails idx={0} {slug} data={project} />

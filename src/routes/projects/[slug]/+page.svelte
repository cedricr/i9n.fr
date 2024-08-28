<script lang="ts">
	import showdown from 'showdown';
	import ProjectViewer from '$lib/project-viewer.svelte';
	import projects from '$lib/projects/projects.js';
	import type { Project } from '$lib/types';

	let { data } = $props();
	const slug = data.slug;
	const converter = new showdown.Converter();
	const project: Project = projects[slug];
</script>

<ProjectViewer idx={0} {slug} short={false} data={project} />

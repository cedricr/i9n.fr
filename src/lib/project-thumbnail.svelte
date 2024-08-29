<script lang="ts">
	import { goto } from '$app/navigation';
	import showdown from 'showdown';
	import type { Project } from './types';

	const converter = new showdown.Converter({
		headerLevelStart: 3,
		smartIndentationFix: true,
		openLinksInNewWindow: true
	});

	interface Props {
		idx: number;
		slug: string;
		data: Project;
	}
	let { idx = 0, slug, data }: Props = $props();

	const target = `/projects/${slug}`;
</script>

{#snippet displayAuthors(authors: string[])}
	{#if authors?.length}
		<div class="text-sm text-zinc-500">
			Avec {#each authors as author, i}
				{@const l = authors.length}
				{#if i > 0}
					{#if i !== l - 1}
						,
					{:else}
						&nbsp;et
					{/if}
				{/if}
				{author}
			{/each}
		</div>
	{/if}
{/snippet}

<div class="flex flex-col gap-2 text-zinc-700 md:flex-row md:gap-6">
	<a
		href={target}
		class="max-h-64 overflow-hidden md:basis-1/2"
		aria-labelledby="project-title-{idx}"
		tabindex="-1"
	>
		<img class="w-full object-fill" src={data.thumbnail} alt="" /></a
	>
	<div class="md:basis-1/2">
		<h2 id="project-title-{idx}" class="text-md mb-2 font-medium md:text-lg">
			<a href={target}>{data.title}</a>
		</h2>
		<p class="prose prose-sm prose-p:text-zinc-600">
			<a href={target} aria-labelledby="project-title-{idx}" tabindex="-1" class="no-underline">
				{@html converter.makeHtml(data.shortDesc)}
			</a>
		</p>
		{@render displayAuthors(data?.coAuthors || [])}
	</div>
</div>

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

<svelte:head>
	<title>{data.title} | Instigation</title>
	<meta name="description" content="Lorem Ipsum" />
</svelte:head>

<div class="flex flex-col gap-4 text-zinc-700 md:flex-row">
	<div class="md:basis-1/3">
		<div class="mb-0 text-lg md:relative md:-top-3.5 md:text-4xl">
			<!-- https://rsms.me/inter/#glyphs/northWestArrow -->
			<a href="/" class="no-underline hover:underline focus:underline">&#x2196</a>
		</div>
		<h2 class="mb-2 text-lg font-semibold md:text-2xl">
			{data.title}
		</h2>
		<p class="prose prose-sm prose-zinc md:prose-base prose-p:text-zinc-600">
			{@html converter.makeHtml(data.fullDesc || data.shortDesc)}
		</p>
		{@render displayAuthors(data?.coAuthors || [])}
	</div>
	<div class="flex flex-col gap-4 md:basis-2/3">
		{#each data.images as image}
			<a href={image.path} target="_blank"
				><img
					class="cover block object-cover drop-shadow-md"
					src={image.path}
					alt={image.alt}
					aria-label="Ouverture dans un nouvel onglet"
				/>
			</a>
		{/each}
	</div>
</div>

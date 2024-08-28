<script lang="ts">
	import { goto } from '$app/navigation';
	import showdown from 'showdown';
	import type { Project } from './types';

	const converter = new showdown.Converter({
		headerLevelStart: 3,
		smartIndentationFix: true
	});

	interface Props {
		idx: number;
		slug: string;
		short: boolean;
		data: Project;
	}
	let { idx = 0, slug, short = true, data }: Props = $props();

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

<svelte:head>
	<title>{data.title} | Instigation</title>
	<meta name="description" content="Lorem Ipsum" />
</svelte:head>

{#if short}
	<!-- #region shortversion -->
	<div class="flex flex-col gap-2 text-zinc-700 md:flex-row md:gap-6">
		<a
			href={target}
			class="max-h-52 overflow-hidden md:basis-1/2"
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
	<!-- #endregion -->
{:else}
	<!-- #region longversion -->
	<div class="flex flex-col gap-4 overflow-hidden text-zinc-700 md:flex-row">
		<div class="">
			<div class="mb-2 text-lg md:text-4xl">
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
		<div class="flex flex-col gap-4">
			{#each data.images as image}
				<a href={image.path} target="_blank"
					><img
						class="block object-cover px-3 drop-shadow-md"
						src={image.path}
						alt={image.alt}
						aria-label="Ouverture dans un nouvel onglet"
					/>
				</a>
			{/each}
		</div>
	</div>
	<!-- #endregion -->
{/if}

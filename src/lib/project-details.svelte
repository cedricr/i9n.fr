<script lang="ts">
	import { goto } from '$app/navigation';
	import showdown from 'showdown';
	import type { Project } from './types';

	const converter = new showdown.Converter({
		headerLevelStart: 3,
		openLinksInNewWindow: true
	});

	interface Props {
		idx: number;
		slug: string;
		data: Project;
	}
	let { idx = 0, slug, data }: Props = $props();
</script>

<svelte:head>
	<title>{data.title} | Instigation</title>
</svelte:head>

<div class="flex flex-col gap-16 text-zinc-700 md:flex-row">
	<div class="md:basis-5/12">
		<div class="mb-0 text-lg md:relative md:-top-3.5 md:text-4xl">
			<!-- https://rsms.me/inter/#glyphs/northWestArrow -->
			<a href="/" class="no-underline hover:underline focus:underline">&#x2196</a>
		</div>
		<h2 class="font-title mb-2 text-lg font-bold md:text-2xl">
			{data.title}
		</h2>
		<div
			class="prose prose-sm prose-zinc hyphens-auto md:prose-base prose-p:leading-normal prose-p:text-zinc-600"
		>
			{@html converter.makeHtml(data.fullDesc || data.shortDesc)}
		</div>
	</div>
	<div class="flex flex-col gap-4 md:basis-7/12">
		{#each data.images as image}
			<figure>
				<a href={image.path} target="_blank">
					<img
						class="cover block object-cover drop-shadow-md"
						src={image.path}
						alt={image.alt}
						aria-label="Ouverture dans un nouvel onglet"
					/>
				</a>
				{#if image.title}
					<figcaption class="mt-2 text-sm italic text-zinc-600">{image.title}</figcaption>
				{/if}
			</figure>
		{/each}
	</div>
</div>

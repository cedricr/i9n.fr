<script lang="ts">
	import { page } from '$app/stores';
	import { mastoIcon, linkedInIcon, gitHubIcon, atIcon, ccIcon, byIcon, saIcon } from '$lib/icons';
	import '../app.postcss';

	let { children } = $props();
</script>

{#snippet icon(rawIconStr: string)}
	<div aria-hidden="true" class="relative top-0.5 inline-block h-3 w-3 md:h-3.5 md:w-3.5">
		{@html rawIconStr}
	</div>
{/snippet}

{#snippet iconLink(href: string, rawIconStr: string, label: string, isMe?: boolean)}
	<a {href} rel={isMe ? 'me' : undefined}>
		{@render icon(rawIconStr)}
		{label}
	</a>
{/snippet}

<div id="content" class="m-auto max-w-5xl px-5 py-8">
	<header
		class="mb-4 flex flex-col border-b pb-4 text-center md:mb-16 md:flex-row md:justify-between md:text-left"
	>
		<div class="mb-2 md:mb-0 md:self-baseline">
			<h1 class="font-title text-4xl font-semibold text-zinc-700 md:text-5xl">
				{#if $page.url.pathname !== '/'}<a
						href="/"
						class="no-underline hover:underline focus:underline">Instigation</a
					>{:else}Instigation{/if}
			</h1>
			<p class="font-title mt-4 text-xl text-zinc-500 md:text-2xl" style="">
				Le portfolio de Cedric Rossi
			</p>
			<p class="font-title text-lg text-zinc-500 md:text-xl" style="">Cartes • Données • Web</p>
		</div>

		<div
			class="md:text-md m-auto flex flex-row flex-wrap gap-x-2 text-xs text-zinc-600 md:relative md:top-3 md:m-0 md:gap-x-4"
		>
			{@render iconLink('https://mapstodon.space/@cedric', mastoIcon, 'Mastodon', true)}
			{@render iconLink('https://github.com/cedricr', gitHubIcon, 'GitHub', true)}
			{@render iconLink('https://www.linkedin.com/in/cedric-rossi', linkedInIcon, 'LinkedIn', true)}
			{@render iconLink('mailto:cedric@i9n.fr', atIcon, 'Courriel', true)}
		</div>
	</header>

	<main>
		{@render children()}
	</main>
	<footer class="mt-8 border-t pt-3 text-zinc-500 md:mt-24">
		<div class="text-xs md:text-sm">
			@ Cedric Rossi 2024
			<a
				href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr"
				target="_blank"
				rel="license noopener noreferrer"
				class="text-xs underline"
			>
				CC BY-SA 4.0
			</a>
			<div class="ml-1 inline-block fill-current">
				<div class="flex flex-row gap-1">
					{@render icon(ccIcon)}
					{@render icon(byIcon)}
					{@render icon(saIcon)}
				</div>
			</div>
		</div>
		<div class="text-xs md:text-sm">
			Ce site est hébergé par <a
				href="https://www.netlify.com/"
				target="_blank"
				rel="noopener noreferrer">Netlify, Inc.</a
			>, 512 2nd Street, Fl 2&nbsp;– San Francisco, CA 94107.
		</div>
	</footer>
</div>

<script>
	import Button from './ui/button/button.svelte'

	const links = [
		{ label: '主页', to: '/' },
		{ label: '社区论坛', to: '/community' },
		{ label: '社团', to: '/clubs' },
		{ label: '关于我们', to: '/about' }
	]
</script>

<div class="flex min-h-14 w-full items-center justify-between bg-blue-50 px-20">
	<div>
		<a href="/" class="text-2xl font-bold">IC Portrayal</a>
	</div>

	<div class="flex gap-6">
		{#each links as link}
			<div
				class="rounded-full px-4 py-2 transition-all duration-200 hover:bg-foreground hover:text-background"
			>
				<a href={link.to}>
					{link.label}
				</a>
			</div>
		{/each}
	</div>

	<div>
		<Button href="/auth" variant="outline">登录</Button>
	</div>
</div>

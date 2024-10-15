<script>
	import Button from './ui/button/button.svelte'
	import { Menu } from 'lucide-svelte'
	import * as Sheet from './ui/sheet'

	const links = [
		{ label: '主页', to: '/' },
		{ label: '社区论坛', to: '/community' },
		{ label: '社团', to: '/clubs' },
		{ label: '关于我们', to: '/about' },
	]
</script>

<div class="absolute top-4 flex w-full justify-center">
	<div
		class="mx-4 flex min-h-14 w-[55rem] items-center justify-between rounded-full bg-primary-foreground bg-opacity-100 px-12 backdrop-blur-lg"
	>
		<div>
			<a href="/" class="text-2xl font-bold">IC Portrayal</a>
		</div>

		<div class="hidden gap-6 md:flex">
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

		<div class="hidden md:block">
			<Button href="/auth" class="rounded-full px-5">登录</Button>
		</div>

		<div class="md:hidden">
			<Sheet.Root>
				<Sheet.Trigger>
					<Button variant="ghost" size="icon">
						<Menu />
					</Button>
				</Sheet.Trigger>

				<Sheet.Content>
					<div class="mx-8 my-12">
						<div class="flex flex-col">
							{#each links as link}
								<a href={link.to}>
									<div
										class="my-1 rounded-full px-4 py-2 transition-all duration-200 hover:bg-foreground hover:text-background"
									>
										{link.label}
									</div>
								</a>
							{/each}
						</div>

						<a href="/auth">
							<Button class="mx-2 my-4 rounded-full px-5">登录</Button>
						</a>
					</div>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</div>

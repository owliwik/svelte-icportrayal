<script>
	import '../app.css'
	import Navigation from '$lib/components/navigation.svelte'
	import { Toaster } from '$lib/components/ui/sonner'
	import GradientAnimation from '$lib/components/gradient-animation.svelte'
</script>

<div class="absolute -z-50 flex h-1 min-h-svh w-full flex-col bg-slate-50">
<GradientAnimation />
	<Navigation />
	<div class="flex-1">
		<div class="h-full">
			<Toaster />
			<slot />
		</div>
	</div>
</div>

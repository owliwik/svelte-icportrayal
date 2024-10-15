<script>
	import '../app.css'
	import Navigation from '$lib/components/navigation.svelte'
	import { Toaster } from '$lib/components/ui/sonner'
</script>

<div class="flex h-1 min-h-svh w-full flex-col bg-slate-50">
	<Navigation />
	<div class="flex-1">
		<div class="h-full">
			<Toaster />
			<slot />
		</div>
	</div>
</div>

<script>
	import '../app.css'
	import Navigation from '$lib/components/navigation.svelte'
</script>

<div class="flex h-1 min-h-svh w-full flex-col bg-slate-50">
	<Navigation />
	<div class="flex-1">
		<div class="h-full">
			<slot />
		</div>
	</div>
</div>

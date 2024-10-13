<script>
	import '../app.css'
	import Navigation from '$lib/components/navigation.svelte'
</script>

<div class="flex flex-col min-h-svh h-1 w-full bg-slate-50">
	<Navigation />
	<div class="flex-1">
		<slot />
	</div>
</div>
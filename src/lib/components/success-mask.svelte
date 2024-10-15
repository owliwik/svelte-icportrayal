<script>
	import { CircleCheck } from 'lucide-svelte'
</script>

<div
	class="animate-fade-in absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center rounded-2xl bg-inherit"
>
	<div class="animate-appearance-in flex flex-col items-center justify-center gap-4">
		<CircleCheck class="w-10 h-10 text-green-600" />
		<span class="text-2xl text-green-600">
			<slot />
		</span>
	</div>
</div>

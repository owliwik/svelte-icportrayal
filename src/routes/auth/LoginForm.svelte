<script>
	import * as Card from '$lib/components/ui/card'
	import * as Form from '$lib/components/ui/form'
	import { Label } from '$lib/components/ui/label'
	import { Input } from '$lib/components/ui/input'
	import { Button } from '$lib/components/ui/button'

	import { superForm } from 'sveltekit-superforms'

	export let loginForm

	const form = superForm(loginForm)
	const { form: formData, enhance } = form
</script>

<Card.Root class="rounded-lg p-4 shadow-2xl">
	<Card.Header>
		<Card.Title class="text-2xl">欢迎回来 👏</Card.Title>
		<Card.Description>登入IC Portrayal来享受最佳体验！</Card.Description>
	</Card.Header>

	<form method="POST" action="?/login" use:enhance>
		<Card.Content class="space-y-2">
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Label>你的邮箱</Label>
					<Input {...attrs} bind:value={$formData.email} />
				</Form.Control>
			</Form.Field>

			<Form.Field {form} name="password">
				<Form.Control let:attrs>
					<Label>你的密码</Label>
					<Input type="password" {...attrs} bind:value={$formData.password} />
				</Form.Control>
			</Form.Field>
		</Card.Content>

		<Card.Footer class="mt-3 flex justify-center">
			<Button type="submit" class="w-full">前往Portrayal！</Button>
		</Card.Footer>
	</form>
</Card.Root>

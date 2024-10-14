<script>
	import * as Card from '$lib/components/ui/card'
	import * as Form from '$lib/components/ui/form'
	import { Label } from '$lib/components/ui/label'
	import { Input } from '$lib/components/ui/input'
	import { Button } from '$lib/components/ui/button'

	import { superForm } from 'sveltekit-superforms'
	import { fly, fade } from 'svelte/transition'
	import Icon from '@iconify/svelte'

	export let signUpForm

	const form = superForm(signUpForm)
	const { form: formData, enhance } = form

	let step = 0
	let finished = [false, true, true]
</script>

<Card.Root class="relative rounded-lg p-4 shadow-2xl">
	<Card.Header>
		{#if step == 0}
			<Card.Title class="text-2xl">加入Portrayal 🙋🏻</Card.Title>
			<Card.Description>只需几步，轻松注册你的账号！</Card.Description>
		{/if}
		{#if step == 1}
			<Card.Title class="text-2xl">保护你的账号 🥸</Card.Title>
			<Card.Description>我们即将完成...</Card.Description>
		{/if}
		{#if step == 2}
			<Card.Title class="text-2xl">只差一步了... 🫡</Card.Title>
			<Card.Description>欢迎来到IC Portrayal！</Card.Description>
		{/if}
	</Card.Header>

	{#if step == 0 && finished[1]}
		<div
			in:fly={{ x: '25%', opacity: 0, duration: 500 }}
			on:introstart={() => (finished[0] = false)}
			out:fade={{ duration: 200 }}
			on:outroend={() => (finished[0] = true)}
		>
			<Card.Content class="space-y-2">
				<Form.Field {form} name="studentID">
					<Form.Control let:attrs>
						<Label>你的BHSFIC学号</Label>
						<Input {...attrs} bind:value={$formData.studentID} />
					</Form.Control>
				</Form.Field>

				<Form.Field {form} name="email">
					<Form.Control let:attrs>
						<Label>你的邮箱</Label>
						<Input {...attrs} bind:value={$formData.email} />
					</Form.Control>
				</Form.Field>
			</Card.Content>
		</div>
	{/if}

	{#if step == 1 && finished[0] && finished[2]}
		<div
			in:fly={{ x: '25%', opacity: 0, duration: 500 }}
			on:introstart={() => (finished[1] = false)}
			out:fade={{ duration: 200 }}
			on:outroend={() => (finished[1] = true)}
		>
			<Card.Content class="space-y-2">
				<Form.Field {form} name="studentID">
					<Form.Control let:attrs>
						<Label>设置一个密码</Label>
						<Input {...attrs} bind:value={$formData.studentID} />
					</Form.Control>
				</Form.Field>

				<Form.Field {form} name="email">
					<Form.Control let:attrs>
						<Label>确认密码</Label>
						<Input {...attrs} bind:value={$formData.email} />
					</Form.Control>
				</Form.Field>
			</Card.Content>
		</div>
	{/if}

	{#if step == 2 && finished[1]}
		<div
			in:fly={{ x: '25%', opacity: 0, duration: 500 }}
			on:introstart={() => (finished[2] = false)}
			out:fade={{ duration: 200 }}
			on:outroend={() => (finished[2] = true)}
		>
			<Card.Content class="space-y-2">
				<Form.Field {form} name="studentID">
					<Form.Control let:attrs>
						<Label>主笔东西</Label>
						<Input {...attrs} bind:value={$formData.studentID} />
					</Form.Control>
				</Form.Field>

				<Form.Field {form} name="email">
					<Form.Control let:attrs>
						<Label>我草</Label>
						<Input {...attrs} bind:value={$formData.email} />
					</Form.Control>
				</Form.Field>
			</Card.Content>
		</div>
	{/if}

	<Card.Footer class="mt-3 flex justify-center gap-2">
		{#if step != 0}
			<Button variant="secondary" size="icon" on:click={() => step--}>
				<Icon icon="mingcute:left-line" class="h-5 w-5" />
			</Button>
		{/if}
		{#if step != 2}
			<Button class="flex-1" on:click={() => step++}>继续！</Button>
		{:else}
			<Button class="flex-1" type="submit">提交</Button>
		{/if}
	</Card.Footer>
</Card.Root>

<script>
	import * as Card from '$lib/components/ui/card'
	import * as Form from '$lib/components/ui/form'
	import { Label } from '$lib/components/ui/label'
	import { Input } from '$lib/components/ui/input'
	import { Button } from '$lib/components/ui/button'
	import * as Alert from '$lib/components/ui/alert'
	import { Confetti } from 'svelte-confetti'
	import { page } from '$app/stores'

	import SuperDebug, { superForm } from 'sveltekit-superforms'
	import LoaderCircle from 'lucide-svelte/icons/loader-circle'
	import Icon from '@iconify/svelte'
	import { Terminal, CircleAlert } from 'lucide-svelte'
	import SuccessMask from '$lib/components/success-mask.svelte'
	import { toast } from 'svelte-sonner'
	import { sleep } from '$lib/sleep'
	import { goto, invalidateAll } from '$app/navigation'

	export let signUpForm

	const form = superForm(signUpForm)
	const { form: formData, enhance, errors, message, submitting } = form

	let step = 0
	$: if ($errors.email || $errors.studentID) {
		step = 0
	} else if ($errors.password || $errors.confirm) {
		step = 1
	}

	$: {
		if ($page.status === 200 && $message && $message.isComplete) {
			;(async () => {
				await sleep(1500)
			})()
		}
	}

	// let finished = [false, true]
</script>

{#if $message && $page.status !== 200}
	<Alert.Root variant={'destructive'} class="my-2">
		<CircleAlert class="h-4 w-4" />
		<Alert.Title>出错了</Alert.Title>
		<Alert.Description>{$message}</Alert.Description>
	</Alert.Root>
{/if}

<Card.Root class="relative rounded-lg p-4 shadow-2xl">
	{#if $page.status === 200 && $message && $message.isComplete}
		<SuccessMask>注册成功</SuccessMask>
		<div
			class="pointer-events-none fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center"
		>
			<Confetti x={[-3, 3]} y={[-2, 2]} amount={800} duration={3000} />
		</div>
	{/if}

	<Card.Header>
		{#if step == 0}
			<Card.Title class="text-2xl">加入Portrayal 🙋🏻</Card.Title>
			<Card.Description>只需几步，轻松注册你的账号！</Card.Description>
		{/if}
		{#if step == 1}
			<Card.Title class="text-2xl">保护你的账号 🥸</Card.Title>
			<Card.Description>我们即将完成...</Card.Description>
		{/if}
	</Card.Header>

	<form method="POST" action="?/signup" use:enhance on:input={() => ($message = undefined)}>
		<!-- {#if step == 0 && finished[1]} -->
		<!-- <div
				in:fly={{ x: '25%', opacity: 0, duration: 500 }}
				on:introstart={() => (finished[0] = false)}
				out:fade={{ duration: 200 }}
				on:outroend={() => (finished[0] = true)}
			> -->
		<div class:hidden={step !== 0}>
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
		<!-- {/if} -->

		<!-- {#if step == 1 && finished[0]} -->
		<!-- <div
				in:fly={{ x: '25%', opacity: 0, duration: 500 }}
				on:introstart={() => (finished[1] = false)}
				out:fade={{ duration: 200 }}
				on:outroend={() => (finished[1] = true)}
			> -->
		<div class:hidden={step !== 1}>
			<Card.Content class="space-y-2">
				<Form.Field {form} name="password">
					<Form.Control let:attrs>
						<Label>设置一个密码</Label>
						<Input {...attrs} bind:value={$formData.password} type="password" />
					</Form.Control>
				</Form.Field>

				<Form.Field {form} name="confirm">
					<Form.Control let:attrs>
						<Label>确认密码</Label>
						<Input {...attrs} bind:value={$formData.confirm} type="password" />
					</Form.Control>
				</Form.Field>
			</Card.Content>
		</div>
		<!-- {/if} -->

		<Card.Footer class="mt-3 flex justify-center gap-2">
			{#if step != 0}
				<Button variant="secondary" size="icon" on:click={() => step--}>
					<Icon icon="mingcute:left-line" class="h-5 w-5" />
				</Button>
			{/if}
			{#if step != 1}
				<Button class="flex-1" on:click={() => step++}>继续！</Button>
			{:else if $submitting}
				<Button class="flex-1" type="submit" disabled>
					<LoaderCircle class="mr-2 h-6 w-6 animate-spin" />
					正在提交
				</Button>
			{:else}
				<Button class="flex-1" type="submit">提交</Button>
			{/if}
		</Card.Footer>
	</form>
</Card.Root>

<script>
	import * as Tabs from '$lib/components/ui/tabs'
	import * as Card from '$lib/components/ui/card'
	import { Button } from '$lib/components/ui/button'
	import { Input } from '$lib/components/ui/input'
	import { Label } from '$lib/components/ui/label'

	import LoginForm from './LoginForm.svelte'
	import SignUpForm from './SignUpForm.svelte'

	export let data
</script>

<div class="flex h-full w-full items-center justify-center">
	<Tabs.Root value="login" class="w-[20rem]">
		<Tabs.List class="grid w-full grid-cols-2">
			<Tabs.Trigger value="login">登录</Tabs.Trigger>
			<Tabs.Trigger value="signup">注册新账户</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="login">
			<LoginForm loginForm={data.loginForm} />
		</Tabs.Content>

		<Tabs.Content value="signup">
			<SignUpForm signUpForm={data.signUpForm} />
		</Tabs.Content>
	</Tabs.Root>
</div>

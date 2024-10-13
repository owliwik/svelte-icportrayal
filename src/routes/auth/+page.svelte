<script>
	import * as Tabs from '$lib/components/ui/tabs'
	import * as Card from '$lib/components/ui/card'
	import { Button } from '$lib/components/ui/button'
	import { Input } from '$lib/components/ui/input'
	import { Label } from '$lib/components/ui/label'
</script>

<div class="flex h-full w-full items-center justify-center">
	<Tabs.Root value="login" class="w-[20rem]">
		<Tabs.List class="grid w-full grid-cols-2">
			<Tabs.Trigger value="login">登录</Tabs.Trigger>
			<Tabs.Trigger value="signup">注册新账户</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="login">
			<Card.Root class="rounded-lg shadow-2xl p-4">
				<Card.Header>
					<Card.Title class="text-2xl">欢迎回来 👏</Card.Title>
					<Card.Description>登入IC Portrayal来享受最佳体验！</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
					<div class="space-y-1">
						<Label for="email">你的邮箱</Label>
						<Input id="email" />
					</div>
					<div class="space-y-1">
						<Label for="password">密码</Label>
						<Input id="password" type="password" />
					</div>
				</Card.Content>
				<Card.Footer class="mt-3 flex justify-center">
					<Button class="w-full">前往Portrayal！</Button>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>

		<Tabs.Content value="signup">
			<Card.Root class="rounded-lg shadow-2xl p-4">
				<Card.Header>
					<Card.Title class="text-2xl">加入Portrayal 🙋🏻</Card.Title>
					<Card.Description>只需几步，轻松注册你的账号！</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
					<div class="space-y-1">
						<Label for="studentID">BHSFIC学号</Label>
						<Input id="studentID" />
					</div>
					<div class="space-y-1">
						<Label for="email">你的邮箱</Label>
						<Input id="email" type="email" />
					</div>
				</Card.Content>
				<Card.Footer class="mt-3 flex justify-center">
					<Button class="w-full">继续！</Button>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
</div>

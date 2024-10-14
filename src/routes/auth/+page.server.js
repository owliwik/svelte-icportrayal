import { z } from 'zod'
import { fail } from '@sveltejs/kit'
import { message, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

const loginSchema = z.object({
	email: z.string().min(1, '请输入邮箱').email('请检查邮箱格式'),
	password: z.string().min(1, '请输入密码'),
})

const signUpSchema = z.object({
	studentID: z.string().length(8, '请检查学号格式'),
	name: z.string().min(2).max(24),
	email: z.string().min(1).email('请检查邮箱格式'),
	password: z.string().min(4, '密码长度不小于4位').max(64, '密码长度不大于64位'),
})

export const load = async () => {
	const loginForm = await superValidate(zod(loginSchema))
	const signUpForm = await superValidate(zod(signUpSchema))

	return { loginForm, signUpForm }
}

export const actions = {
	login: async (event) => {
		const form = await superValidate(event.request, zod(loginSchema))

		if (!form.valid) return fail(400, { form })

		//console.log(form)

		return message(form, 'Successfully signed in!')
	},

	signup: async (event) => {
		const form = await superValidate(event.request, zod(signUpSchema))

		if (!form.valid) return fail(400, { form })

		console.log(form)
		return message(form, 'Successfully signed up!')
	},
}

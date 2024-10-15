import { z } from 'zod'
import { fail, json } from '@sveltejs/kit'
import { message, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

import { firebaseAuth, firebaseDB } from '$lib/server/firebase/admin.js'

const loginSchema = z.object({
	email: z.string().min(1, '请输入邮箱').email('请检查邮箱格式'),
	password: z.string().min(1, '请输入密码'),
})

const signUpSchema = z
	.object({
		studentID: z.string().length(8, '请检查学号格式'),
		email: z.string().min(1).email('请检查邮箱格式'),
		password: z.string().min(6, '密码长度不小于6位').max(64, '密码长度不大于64位'),
		confirm: z.string(),
	})
	.refine(
		(data) => {
			return data.password === data.confirm
		},
		{ message: '密码和确认密码不一致', path: ['confirm'] },
	)

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

		const { email, password, studentID } = form.data

		let name
		try {
			const query = await firebaseDB
				.collection('profiles')
				.where('studentID', '==', studentID)
				.get()
			const user = query.docs[0].data()
      name = user.lastName + user.firstName

			console.log(user)
			if (user.uid) {
				return message(form, '该学号已经被注册', { status: 409 })
			}
		} catch (error) {
			console.log(error)
			return message(form, '未找到学号', { status: 409 })
		}

		try {
			const user = await firebaseAuth.createUser({
				email,
				password,
			})

			return message(form, { isComplete: true })
		} catch (error) {
			if (error.errorInfo.code === 'auth/email-already-exists') {
				return message(form, '该邮箱已经被注册！', { status: 409 })
			}
		}
	},
}

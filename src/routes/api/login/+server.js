import { adminApp } from '$lib/server/firebase/admin.js'
import { json } from '@sveltejs/kit'

export const POST = (event) => {
  return json(adminApp)
}
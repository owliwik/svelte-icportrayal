import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { FB_PROJECT_ID, FB_PRIVATE_KEY, FB_CLIENT_EMAIL } from '$env/static/private'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

/**
 * @type {import("firebase-admin/app").App}
 */
export let adminApp

if (!getApps().length) {
	adminApp = initializeApp({
		credential: cert({
			projectId: FB_PROJECT_ID,
			clientEmail: FB_CLIENT_EMAIL,
			privateKey: FB_PRIVATE_KEY
		}),
    
	})
} else {
	adminApp = getApps()[0]
}

export let firebaseAuth = getAuth(adminApp)
export let firebaseDB = getFirestore(adminApp)

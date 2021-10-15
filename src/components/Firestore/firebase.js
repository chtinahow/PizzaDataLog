import firebase from 'firebase/app'
import 'firebase/firestore'

export const initializeFirebase = async () => {
	const config = await (await fetch('/__/firebase/init.json')).json()
	return firebase.initializeApp(config)
}

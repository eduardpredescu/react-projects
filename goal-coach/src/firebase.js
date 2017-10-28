import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBMjwpd1YQC7wCLIjUcIK9o0HmI1zN7m44",
    authDomain: "goalcoach-433da.firebaseapp.com",
    databaseURL: "https://goalcoach-433da.firebaseio.com",
    projectId: "goalcoach-433da",
    storageBucket: "",
    messagingSenderId: "369619812212"
}

export const firebaseApp = firebase.initializeApp(config)
export const goalRef = firebase.database().ref('goals')
export const completeGoalRef = firebase.database().ref('completeGoals')
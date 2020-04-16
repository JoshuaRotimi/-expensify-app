import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAsQCn9vgB9XtCk1Bt5z7hRcRCIUZYaHP4",
    authDomain: "expensify-420-f8b3c.firebaseapp.com",
    databaseURL: "https://expensify-420-f8b3c.firebaseio.com",
    projectId: "expensify-420-f8b3c",
    storageBucket: "expensify-420-f8b3c.appspot.com",
    messagingSenderId: "141650058874",
    appId: "1:141650058874:web:2f6ca91b595226b626e5c3",
    measurementId: "G-1ZRHFRWQ08"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


 export { firebase, googleAuthProvider, database as default};


// database.ref('expenses').on('child_removed', (snapshot) => {
//      console.log(snapshot.key, snapshot.val())
// });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });
//
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

//
// database.ref('expenses').push({
//     description: "rent",
//     note: 'This was for the last month',
//     amount: 424200,
//     createdAt: 49029032
// });

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//
//     console.log(expenses)
// });
//
// database.ref().on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//
//     console.log(expenses)
// });
//
//






// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });


// database.ref().once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     }).catch((e) => {
//         console.log("error fetching data: ", e)
// });

// database.ref().set({
//     name: "Joshua",
//     age: 27,
//     stressLevel: 6,
//     job: {
//         title: "Software Developer",
//         company: 'Google'
//     },
//     location: {
//         city: "Lagos",
//         country: "Nigeria"
//     }
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((e) => {
//     console.log("This failed", e)
// });
//
// // database.ref('isSingle').remove().then(() => {
// //     console.log('Data removed')
// // }).catch((e) => {
// //     console.log('error: ', e)
// // });
//
// database.ref().update({
//     stressLevel: 9,
//     'location/city': "Canada",
//     'job/company': "Amazon"
// });






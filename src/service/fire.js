import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyBEbOCxbWlpI4BM3qX9kMBvr9D6nZmZQ9w",
  authDomain: "testtask-ba53d.firebaseapp.com",
  databaseURL: "https://testtask-ba53d.firebaseio.com",
  projectId: "testtask-ba53d",
  storageBucket: "testtask-ba53d.appspot.com",
  messagingSenderId: "587457923432",
  appId: "1:587457923432:web:e119ee33e04fa2e59caedd"
};

export const fire = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
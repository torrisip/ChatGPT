// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDI2NuEU1YmV4bRlA4apifmxN9jqSg3lkc",
    authDomain: "chatgpt-6cdee.firebaseapp.com",
    projectId: "chatgpt-6cdee",
    storageBucket: "chatgpt-6cdee",
//    messagingSenderId: "SENDER_ID",
//    appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Login form
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Login success
        console.log('Login success');
        document.getElementById('logoutBtn').style.display = 'block'; // Mostra il bottone logout
    })
    .catch((error) => {
        // Login error
        console.error('Login error:', error.code, error.message);
        // Mostra un messaggio di errore all'utente
        alert('Errore durante l\'autenticazione: ' + error.message);
    });
});

// Logout button
const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut()
        .then(() => {
            // Logout success
            console.log('Logout success');
            document.getElementById('logoutBtn').style.display = 'none'; // Nascondi il bottone logout
        })
        .catch((error) => {
            // Logout error
            console.error('Logout error:', error.message);
        });
});

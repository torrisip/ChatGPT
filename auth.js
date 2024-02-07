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

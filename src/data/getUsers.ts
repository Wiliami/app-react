import { membership } from '../lib/permissions'

// Chamada banco de dados Fetch
const user = {
    id: 1,
    name: "Wiliamis",
    email: "oliveirawiliamis@gmail.com",
    role: 'user'
}

export async function getUsers() {
    // Verify role admin
    if(user.role === membership) {
        // <Users />
    } else {
        console.log('Acesso negado')
        // code here
    }   
};



const URL = 'https://gentle-savannah-81499.herokuapp.com';

export async function getToken(loginInfo, type) {
    
    const authURL = `${URL}/auth/${type}`; 
    
    const resp = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
    });
    const data = await resp.json();
    console.log(data);
   
    localStorage.setItem('TOKEN', data.token);

    return data.token;
}


export async function getTodos(token) {
    const todosURL = `${URL}/api/todos`;
    const resp = await fetch(todosURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    });
    const data = await resp.json();
    return data;
}

export async function createTodo(token, todo) {
    const todosURL = `${URL}/api/todos`;
    const resp = await fetch(todosURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(todo),
    });
    const data = await resp.json();
    console.log(data);
    return data;
}

export async function updateTodo(token, todo) {
    const todosURL = `${URL}/api/todos/${todo.id}`;
    const resp = await fetch(todosURL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(todo),
    });
    const data = await resp.json();
    return data;
}
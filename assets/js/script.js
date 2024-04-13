async function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error al cargar los posts:', error);
        document.getElementById('post-data').innerHTML = `<p>Error al cargar los posts: ${error.message}</p>`;
    }
}
function displayPosts(posts) {
    const container = document.getElementById('post-data');
    container.innerHTML = '<ul>'; // Iniciar la lista
    posts.slice(0, 20).forEach(post => {
        // Añadir solo el título en negrita, manteniendo el cuerpo del texto normal
        container.innerHTML += `<li><strong>${post.title}</strong>: ${post.body}</li>`;
    });
    container.innerHTML += '</ul>'; // Cerrar la lista
}

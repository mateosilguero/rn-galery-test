let apiUrl = 'https://my-json-server.typicode.com/mateosilguero/rn-galery-test/albums';

export const get_albums = () =>
	fetch(apiUrl)
		.then(res => res.json())
		.catch(err => console.log(err));
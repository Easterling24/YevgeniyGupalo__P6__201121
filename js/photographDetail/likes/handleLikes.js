function incrementLikes(likes, id) {
	let likesValue = document.getElementById(id);
	console.log(likesValue)
	let result = (likesValue.innerHTML = likes + 1);
	let likeTotal = document.getElementById('sum');

	if (result) {
		likeTotal.innerHTML = parseInt(likeTotal.innerHTML) + 1;
	}
}
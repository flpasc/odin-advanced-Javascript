const img = document.querySelector("img");

// asyncronus code without async and await
const getCatGif = () => {
	fetch("https://api.giphy.com/v1/gifs/translate?api_key=NWym53FBl67V0zSF5DMB8F7v9W48Z3W2&s=cat")
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			img.src = response.data.images.original.url;
		});
};

// using async and await for async functions
async function getCatGif2() {
	const response = await fetch(
		"https://api.giphy.com/v1/gifs/translate?api_key=NWym53FBl67V0zSF5DMB8F7v9W48Z3W2&s=cat"
	);
	const catData = await response.json();
	img.src = catData.data.images.original.url;
}
const btn = document.getElementById("new-gif");
btn.addEventListener("click", getCatGif2);
getCatGif2();

const searchGif = () => {
	let apicall =
		"https://api.giphy.com/v1/gifs/translate?api_key=NWym53FBl67V0zSF5DMB8F7v9W48Z3W2&s=";

	let searchTerm = document.getElementById("search").value;
	apicall += searchTerm;
	fetch(apicall)
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			img.src = response.data.images.original.url;
		})
		.catch((error) => {
			alert(error);
		});
};

const findButton = document.getElementById("find");
findButton.addEventListener("click", searchGif);

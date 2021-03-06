async function getMedia() {
	const media = getPhotographerApi();
	return media;
}

async function displayMedia(photographers, media) {
	const Details = new photographDetail(photographers, media);
	Details.getPhotographDetails();
	Details.getPhotographMedia();
	

	// Getting total amount of likes and price per day
	const Info = new ExtraInfo(photographers, media);
	Info.getTotalLikes();
	Info.getPrice();

	// Sort media by number of likes and by alphabetical order
	new Filter(media).onChangeFilter()

	const phDataModal = getModalData(photographers);
	phDataModal.getPhName();

	// Dropdown menu to filter
	new dropDown().selectedFilter();
}

async function run() {
	const { photographers, media } = await getMedia();
	displayMedia(photographers, media);
}

run();

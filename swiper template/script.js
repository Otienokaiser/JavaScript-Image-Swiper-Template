let currentPhotoIndex = 0;
const photos = [
    { src: 'images/image1.jpg', name: 'Product Name', description: 'Description of photo shoe' },
    { src: 'images/image2.jpg', name: 'Product Name', description: 'Description of photo 2' },
    { src: 'images/image3.jpg', name: 'Product Name', description: 'Description of shoe photo 3' }
];

function updatePhoto() {
    const photoElement = document.getElementById('photo');
    const nameElement = document.getElementById('name');
    const descriptionElement = document.getElementById('description');
    photoElement.src = photos[currentPhotoIndex].src;
    nameElement.textContent = photos[currentPhotoIndex].name;
    descriptionElement.textContent = photos[currentPhotoIndex].description;
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex > 0) ? currentPhotoIndex - 1 : photos.length - 1;
    updatePhoto();
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex < photos.length - 1) ? currentPhotoIndex + 1 : 0;
    updatePhoto();
}

// Initialize with the first photo
updatePhoto();

const profileImages = ["profile01.jpg","profile02.jpg","profile03.jpg"];
const profile = document.querySelector('#aboutme .profile_image');
const randomImage = profileImages[Math.floor(Math.random()* images.length)];
const profileImage = document.createElement("img");

profileImage.src = `./images/${randomImage}`;

profile.appendChild(profileImage);

profileImage.className = 'profile_img';
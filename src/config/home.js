// ** For more information on how to edit the config, please read the README.md ** //
// https://github.com/underscorelior/HHS-Club-Template?tab=readme-ov-file#about-section-srcconfigaboutjs

const description = `HHS's community of mathematicians. We provide an innovative and supportive atmosphere where people can share their passion for math.`;

const secondary_button = {
	display: true,
	text: 'Speaker form',
	url: 'https://forms.gle/gcWdrpNTeTBykWyw6',
};

const carousel = [
	{
		name: 'One of Our Many Meetings',
		description: `I wonder what they are up to. Probably math.`,
		image: '/meetingimage.png',
	},
	{
		name: 'Latest News',
		description: `Our second general meeting is on 9/23/24! Make sure to come to B103 during lunch!`,
		image: '/placeholder.png',
	},
	{
		name: 'An Old Club Photo',
		description: `We've been at Homestead for a while.`,
		image: '/mathclubphoto.png',
	},
];

// *** DO NOT EDIT *** //
const home_config = {
	home_page: {
		description: description,
		secondary_button: secondary_button,
		carousel: carousel,
	},
};
export default home_config;

// ** For more information on how to edit the config, please read the README.md ** //
// https://github.com/underscorelior/HHS-Club-Template?tab=readme-ov-file#meetings-page-srcconfigmeetingsjs

const info = `We meet every other Monday during lunch in room B103 (Ms. Gopal's room).
                      We announce all our meetings via the discord and our email list, so make sure to join those!`;
const activities = `We host a variety of activities, including talks, guts rounds, ARML-style contests, mock teams rounds, and math games.`;

const image = '/meetingimage.png';

const link =
	'https://forms.gle/RSyCzrjpsMJ8qxhb8';

// *** DO NOT EDIT *** //
const meetings_config = {
	meetings: {
		info: info,
		activities: activities,
		image: image,
		link: link, //can be a link to your event/meeting location
	},
};
export default meetings_config;

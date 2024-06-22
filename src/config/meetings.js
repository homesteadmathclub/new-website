// ** For more information on how to edit the config, please read the README.md ** //
// https://github.com/underscorelior/HHS-Club-Template?tab=readme-ov-file#meetings-page-srcconfigmeetingsjs

const info = `We meet every Tuesday during lunch in room X100 (Mr. Teacher's room).
                      Check the campus map to the right to see the location!
                      The image to the right could also be an photo of one of our exciting meetings!
                      Our next meeting will be on 12/12/12. During our meeting, we will have 
                      a short presentation about templates.`;
const activities = `During our meetings, we will usually do w, x, and y! Sometimes we also do z!`;

const image = '/meetingimage.png';

const link =
	'https://drive.google.com/file/d/1vmm99U7K9cA58zVhDcLVBG-gxLYeFcdO/view';

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

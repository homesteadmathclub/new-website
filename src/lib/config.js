import general_config from '@/config/general';
import home_config from '@/config/home';

const meetings = {
	info: `We meet every Tuesday during lunch in room X100 (Mr. Teacher's room).
                      Check the campus map to the right to see the location!
                      The image to the right could also be an photo of one of our exciting meetings!
                      Our next meeting will be on 12/12/12. During our meeting, we will have 
                      a short presentation about templates.`,
	activities: `During our meetings, we will usually do w, x, and y! Sometimes we also do z!`,
	image_link:
		'https://drive.google.com/file/d/1vmm99U7K9cA58zVhDcLVBG-gxLYeFcdO/view', //can be a link to your event/meeting location
};

// *** DO NOT EDIT *** //
const config = {
	...general_config,
	...home_config,
	meetings: meetings,
	officer_team: officer_team,
	officer_app: officer_app,
};
export default config;

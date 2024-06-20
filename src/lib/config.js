const club_name = 'Template Club';
const discord_url = 'https://discord.gg/YOUR_SERVER_HERE';
const signup_form = 'https://forms.google.com';

const home_page_description = `Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`;

const home_page_secondary_button = {
	display: true,
	text: 'Secondary Button',
	url: 'https://example.com',
};

const officer_team = [
	{ name: 'Example Human', image: '/face1.png', role: 'Lead Idiot' },
	{ name: 'Jonathan Doe', image: '/face2.png', role: 'I honestly dont know' },
	{ name: 'Real Human Being', image: '/face3.png', role: 'Leader' },
	{ name: 'Steve Jobs', image: '/face4.png', role: 'Who is Steve Jobs?' },
];

const about_sections = [
	// add/remove sections as needed
	{
		title: 'Section 1',
		content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`,
	},
	{
		title: 'Section 2',
		content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`,
	},
	{
		title: 'Section 3',
		content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`,
	},
	{
		title: 'Section 4',
		content: `Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`,
	},
];

const meetings = {
  info: `We meet every Tuesday during lunch in room X100 (Mr. Teacher's room).
                      Check the campus map to the right to see the location!
                      The image to the right could also be an photo of one of our exciting meetings!
                      Our next meeting will be on 12/12/12. During our meeting, we will have 
                      a short presentation about templates.`,
  activities: `During our meetings, we will usually do w, x, and y! Sometimes we also do z!`,
  image_link:'https://drive.google.com/file/d/1vmm99U7K9cA58zVhDcLVBG-gxLYeFcdO/view' //can be a link to your event/meeting location
}

// *** DO NOT EDIT *** //
const config = {
	club_name: club_name,
	discord_url: discord_url,
	signup_form: signup_form,
	about_sections: about_sections,
  meetings: meetings,
	home_page: {
		description: home_page_description,
		secondary_button: home_page_secondary_button,
	},
	officer_team: officer_team,
};
export default config;

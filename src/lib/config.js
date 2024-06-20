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

// *** DO NOT EDIT *** //
const config = {
	club_name: club_name,
	discord_url: discord_url,
	signup_form: signup_form,
	about_sections: about_sections,
	home_page: {
		description: home_page_description,
		secondary_button: home_page_secondary_button,
	},
	officer_team: officer_team,
};
export default config;

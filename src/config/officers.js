// ** For more information on how to edit the config, please read the README.md ** //
// https://github.com/underscorelior/HHS-Club-Template?tab=readme-ov-file#officers-page-srcconfigofficersjs

const officer_team = [
	{ name: 'Example Human', role: 'Event Manager', image: '/face1.png' },
	{ name: 'Jonathan Doe', role: 'I honestly dont know', image: '/face2.png' },
	{ name: 'Real Human Being', role: 'Leader', image: '/face3.png' },
	{ name: 'Steve Jobs', role: 'Chief Steve Officer', image: '/face4.png' },
	{ name: 'Example Human', role: 'Web Master', image: '/face1.png' },
];

const officer_app = {
	display: true,
	open: true,
	open_text:
		'Our officer applications are open until 12/12/1212! Aliquip magna non laboris amet irure fugiat reprehenderit laboris labore non anim.',
	closed_text:
		"Our officer applications aren't open yet! Wait until officer applications open.",
	link: 'https://forms.google.com/',
};

// *** DO NOT EDIT *** //
const officer_config = {
	officer_team: officer_team,
	officer_app: officer_app,
};
export default officer_config;

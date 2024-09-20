// ** For more information on how to edit the config, please read the README.md ** //
// https://github.com/underscorelior/HHS-Club-Template?tab=readme-ov-file#officers-page-srcconfigofficersjs

const officer_team = [
	{ name: 'Aarush Khare', role: 'President', image: '/aarush.png' },
	{ name: 'Peter Ferolito', role: 'Vice President', image: '/peter.png' },
	{ name: 'Luke Wang', role: 'Web Master / Outreach Director / Secretary / Treasurer', image: '/luke.png' },
	{ name: 'Rohan Bodke', role: 'Activities Director', image: '/placeholder.png' },
	{ name: 'Jeremy Gu', role: 'Activities Director', image: '/placeholder.png' },
	{ name: 'Garret Cai', role: 'Competitions Director', image: '/garrett.png' },
];

const officer_app = {
	display: true,
	open: false,
	open_text:
		'Our officer applications are now open!',
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

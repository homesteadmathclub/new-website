// ** For more information on how to edit the config, please read the README.md ** //
// https://github.com/underscorelior/HHS-Club-Template?tab=readme-ov-file#about-section-srcconfigaboutjs

const display_about = true;

const about_sections = [
	{
		title: 'What do we do at Math Club?',
		content: `We do fun math activities, contest preparation, competitions, guest lectures, and more. 
You can expect activities like guts rounds, ARML-style contests, mock teams rounds, and math games. 
Contests include AMC 10/12, AIME, BMT, and SMT. Come to our meetings every other Monday during lunch in B103. Bring your friends!`,
	},
	{
		title: 'Speakers at our club',
		content: `At our meetings you can expect HHS teachers, students, and external speakers providing interesting and interactive talks about math.
            For example, during the 2023-2024 school year, we had a former math teacher give an interesting talk relating gerrymandering to math.
            Any club member can give a short talk about math! If you are interested in giving a talk, fill out the google form linked via the "Speaker form" button above. `,
	},
];

// *** DO NOT EDIT *** //
const about_config = {
	display_about: display_about,
	about_sections: about_sections,
};
export default about_config;

// *** DO NOT EDIT *** //
import about_config from '@/config/about';
import general_config from '@/config/general';
import home_config from '@/config/home';
import meetings_config from '@/config/meetings';
import officer_config from '@/config/officers';
import resources_config from '@/config/resources';

// *** DO NOT EDIT *** //
const config = {
	...general_config,
	...home_config,
	...officer_config,
	...about_config,
	...resources_config,
	...meetings_config,
};
export default config;

# HHS Club Template
A highly customizable club template for Homestead High School clubs. 


## Customization

> [!IMPORTANT]
> All images **MUST** be put in the [public](/public) folder!  
If the image is in the public folder, simply just put a forward-slash ("/") and the name of the image to use it.

> [!WARNING]
> Do not touch the very last part unless you know what you are doing.

> Edit all the files in the [src/config](/src/config/) folder.

Change the placeholder information with your club's information. 

## Edit [src/config/general.js](/src/config/general.js) for general information:
#### `club_name`
  - Name of the club
#### `club_email`
  - Club email 
#### `signup_form`
  - URL to your sign up/email list form
#### `discord_url`
  - Club Discord server invite code (Ex. "dCqnBzeqUV")
  - If your club does not have a discord server, keep the string empty
#### `instagram_handle`
  - Club Instagram handle (Ex. "zuck")
  - If your club does not have an instagram, keep the string empty
> [!NOTE]
> For both the `discord_url` and the `instagram_handle`, do not include any part of the URL (https://discord.gg/ for Discord or https://instagram.com/ for Instagram)

## Edit [src/config/home.js](/src/config/home.js) to change information on the homepage:
#### `description`
  - Description of club to be put on the website  
    <img width="600" alt="image" src="https://github.com/underscorelior/HHS-Club-Template/assets/85250652/b1a06d13-8e15-4ec5-bd67-151ec968c9d6">
#### `secondary_button`
  - A completely optional secondary button to be shown on the homepage, can be used for a second important link
    <img width="600" alt="image" src="https://github.com/underscorelior/HHS-Club-Template/assets/85250652/a5ed5842-3b4e-4db0-b7da-45aa828c913a">
  - The button is configured in the following format:
    - `display` - a boolean (`true`/`false`), represents whether or not the button should be displayed
    - `text` - the text that button contains, make sure to keep it short
    - `url` - the url that the button should redirect to
      - If you want it to redirect to another page in your site, just put a slash in front of the page name (Ex. `/about`)
#### `carousel`
  - Carousel of information to display about the club  
  <img width="600" alt="image" src="https://github.com/underscorelior/HHS-Club-Template/assets/85250652/75910482-7f91-4b83-9db8-d3a90ee1d55f">

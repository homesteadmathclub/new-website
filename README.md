# HHS Club Template

A highly customizable club website template for Homestead High School clubs.

## Customization

> [!IMPORTANT]
> All images **MUST** be put in the [public](/public) folder!  
> If the image is in the public folder, simply just put a forward-slash ("/") and the name of the image to use it.
> Edit all the files in the [src/config](/src/config/) folder.

Replace the placeholder information with your club's information.

## General Club Info ([src/config/general.js](/src/config/general.js)):

#### `club_name`

-   Name of the club. (Ex. "HHS Template Club")

#### `club_website_description`

-   Club website description

#### `club_icon`

-   Icon of the club

#### `club_email`

-   Club email

#### `signup_form`

-   URL to your sign up/email list form

#### `discord_url`

-   Club Discord server invite code (Ex. "dCqnBzeqUV")
-   If your club does not have a discord server, keep the string empty

#### `instagram_handle`

-   Club Instagram handle (Ex. "zuck")
-   If your club does not have an instagram, keep the string empty
    > [!NOTE]
    > For both the `discord_url` and the `instagram_handle`, do not include any part of the URL (https://discord.gg/ for Discord or https://instagram.com/ for Instagram)

## Home Page ([src/config/home.js](/src/config/home.js)):

#### `description`

-   Description of club to be put on the website  
    <img width="600" alt="image" src="https://github.com/underscorelior/HHS-Club-Template/assets/85250652/b1a06d13-8e15-4ec5-bd67-151ec968c9d6">

#### `secondary_button`

-   A completely optional secondary button to be shown on the homepage, can be used for a second important link
    <img width="600" alt="image" src="https://github.com/underscorelior/HHS-Club-Template/assets/85250652/a5ed5842-3b4e-4db0-b7da-45aa828c913a">
-   The button is configured in the following format:
    -   `display` - a boolean (`true`/`false`), represents whether or not the button should be displayed
    -   `text` - the text that button contains, make sure to keep it short
    -   `url` - the url that the button should redirect to
        -   If you want it to redirect to another page in your site, just put a slash in front of the page name (Ex. `/about`)

#### `carousel`

-   Carousel of information to display about the club  
    <img width="600" alt="image" src="https://github.com/underscorelior/HHS-Club-Template/assets/85250652/75910482-7f91-4b83-9db8-d3a90ee1d55f">
-   The carousel's slides are created in the following format:
    -   `name` - the name of the slide
    -   `description` - the text contained in the slide
    -   `image` - the location of the image to be used

## About Section ([src/config/about.js](/src/config/about.js)):

#### `display_about`

-   A boolean (`true`/`false`), which controls whether or not the about section should be displayed

#### `about_sections`

-   The different sections of the about section
-   Each section is created using the following format:
    -   `title` - the title of the section
    -   `content` - the content of the section

## Meetings Page ([src/config/meetings.js](/src/config/meetings.js)):

#### `info`

-   Information on the meetings page  
    <img width="600" alt="image" src="https://github.com/underscorelior/HHS-Club-Template/assets/85250652/6bbf4e10-4f99-4a82-a0ce-e2cdbfbee2fa">

#### `activities`

-   Information about club activities  
    <img width="600" alt="image" src="https://github.com/underscorelior/HHS-Club-Template/assets/85250652/6fc132b0-5909-441f-b7ff-2de836d11ef3">

#### `image`

-   Image shown on meetings page  
    <img width="600" alt="image" src="https://github.com/underscorelior/HHS-Club-Template/assets/85250652/19e52d9d-fb69-45bc-a709-ce5f80b98e2a">

#### `link`

-   Link that users will be redirected to when clicking on the image

## Officers Page ([src/config/officers.js](/src/config/officers.js)):

#### `officer_team`

-   A list of officers
-   Officers are represented with the following format:
    -   `name` - officer's name
    -   `role` - officer's role
    -   `image` - officer's portrait

#### `officer_app`

-   An optional officer application section
-   The officer application is customizable through the following format:
    -   `display` - a boolean (`true`/`false`), represents whether officer app section should be displayed
    -   `open` - a boolean (`true`/`false`), represents whether officer app is open or not
    -   `open_text` - text that is shown when the application is open
    -   `closed_text` - text that is shown when the application is closed
    -   `link` - a link to the officer application, which is displayed as a button

## Resources Page ([src/config/resources.js](/src/config/resources.js)):

#### `resources_sections`

-   The different sections of the resources page
-   Each section is created using the following format:
    -   `title` - the title of the section
    -   `content` - the content of the section (a list of links)

> [!NOTE]
> If any help is needed, file an issue on this repository and we will get back to you as soon as possible!

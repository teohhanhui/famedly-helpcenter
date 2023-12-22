# helpcenter

## Run development for the first time

1. Make sure you use Node.js version >=16.14
2. Run `npm ci`
3. Run `npm start`
4. Open http://localhost:3000/helpcenter/

## Edit/Add pages

You can find the pages in **/docs/help-center/**. 
If you edit a page, make sure you edit the German localization in **/i18n/de/docusaurus-plugin-content-docs/current/help-center/**, too. 

To add a page, you can copy and adjust an existing page and add a translation to **/i18n/de/docusaurus-plugin-content-docs/current/help-center/**. 
Alternatively the translation could be done by using [Crowdin Plugin](https://crowdin.com/project/famedly-helpcenter/de). Instructions for using Crowdin can be found in this [YouTube Tutorial](https://www.youtube.com/watch?v=SYPetSWihHM) or in the [Crowdin Documentation](https://support.crowdin.com/crowdin-intro/). 
Please note that you have to adjust the header of the MDX-file, too and set the correct sidebar\_position (order for the menu). 

## View locally made translations

In development you can't switch to translated pages but when you build the page and then serve it, you can see your progress. 

1. Run `npm run build`
2. Run `npm run serve`
3. The served web-app will open automatically, there you can switch to German language

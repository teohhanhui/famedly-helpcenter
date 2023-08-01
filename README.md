# helpcenter

## Run development for the first time

1. Make sure you use Node.js version >=16.14
2. Run ```npm ci```
3. Run ```npm start```
4. Open http://localhost:3000/helpcenter/

## Edit/Add pages

You can find the pages in **/docs/help-center/**. 
If you edit a page, make sure you edit the German localization in **/i18n/de/docusaurus-plugin-content-docs/current/help-center/**, too. 

To add a page, you can copy and adjust an existing page and add a translation to **/i18n/de/docusaurus-plugin-content-docs/current/help-center/**. 
Please note that you have to adjust the header of the MDX-file, too and set the correct sidebar_position (order for the menu).

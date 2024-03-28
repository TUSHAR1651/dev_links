### Issues that I encoutered during the FE

#### Custom Themes

1. While building custom theme feature, if I create a new Theme for every custom theme then I will be left many unused theme in the DB and moreover users dont have the reference to those theme in their accounts.
   Moreover the complexity in terms of the avaible options to the user are really less
2. So I decided to assign custom look prperty to the userModel,which will reduce my calls to DB to create a new theme everytime user changes minor details

3. Instead I will change the prop to the userModel and will use debounce so that their is reduction in the number of calls to the DB

4. Again change , Now I am creating model for a custom model but for max one user there will only be one model since I changing that model everytime

5. Calls to DB remain the same....

#### Applying styles to the FE

1. Since the css was applied dynamically and tried changing the config which includes all the classes but the file size was too much \*

2. So I decided to use inline css for the same but still trying to find if there is a way to use tailwind in such case.

#### Making the FE SSR

1. Since this is my first time I am using Nextjs with express,So I am understanding how to apply SSR to the app.

Happy Coding!! ugghhhh

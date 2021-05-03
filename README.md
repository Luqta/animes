# animes
<h1>English</h1>

<p>On this app user can add some data to the animes that user had watched, after join in app the user will see the login page, with login and password fields, this work with firebase Auth, right below have a image how this page is show to user.</p>

<img src="/assets/images/LoginPage.jpeg" alt="LoginPage"
	title="LoginPage" width="300" height="600" />

<p>If the e-mail that user put in is not registred yet, a message will appear(below image), that are two options, if user press it on no, nothing will happen, but if press it on yes that email and password on fields will be registred in firebase Auth to user login whenever
he wants.</p>

<img src="/assets/images/Register.jpeg" alt="Register"
	title="Register" width="300" height="600" />

<p>fter login, will be showed a empty animes page, if user press it on the add icon, will navigate to anime form page, where user can add your own animes, the field to fill are:</p>

<ul>
<li>Title, where user can put in the anime's name;</li>
<li>A field that can select a image on his smartphone from that anime;</li>
<li>A picker to user choose the anime's gender;</li>
<li>A rate field to user give a opinion about that anime, the rate goes 0 to 100;</li>
<li>The last field is a field bigger to user put in a description about that anime.</li>
</ul>

This form page look like this image:

<img src="/assets/images/AddAnimePage.jpeg" alt="AddAnimePage"
	title="AddAnimePage" width="300" height="600" />

<p>After the anime is added, if you return to animes page, will realize that your anime is added on the list with the title and image, and in the image bellow have a example where user didn't put a image, and the default image icon appear.</p>

<img src="/assets/images/animesPage.jpeg" alt="animesPage"
	title="animesPage" width="300" height="600" />

<p>You can click on the anime card and will navigate to anime detail page, where are the detailed data about that anime, if you click on card bellow the image the description accordion will open up like the second image bellow:</p>

<img src="/assets/images/detailedAnimePageClosed.jpeg" alt="detaileAnimePageClosed"
	title="detaileAnimePageClosed" width="300" height="600" />

<img src="/assets/images/detailedAnimePageOpened.jpeg" alt="detaileAnimePageOpened"
	title="detaileAnimePageOpened" width="300" height="600" />

<p>If you see bellow all this, have two buttons a edit button, and a delete button, if you click on remove button that anime will be deleted from database, and if you click on edit button will navigate to edit form page, that is made for you edit any data about that anime, if you made any mistake.</p>

<img src="/assets/images/EditPage.jpeg" alt="EditPage"
	title="EditPage" width="300" height="600" />

<p>To all those data, is used the  firebase database, and only the user who created that data can use, viewing, delete and editing.</p>

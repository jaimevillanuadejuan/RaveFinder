<h1>RaveFinder</h1>
<hr><p>RaveFinder helps you find safe tickets for your favorite artist's upcoming show/concert and discover any future events they're playing.</p><h2>General Information</h2>
<hr><ul>
<li>Ravefinder application is a promotional search engine where users can look for concerts where their favorite artists are playing, find a safe purchase link to buy the ticket for that event and find out about other upcoming events.</li>
</ul><ul>
<li>RaveFinder helps the raver find tickets for an event where their favorite artist/s are playing at a
good price, having the option as well to filter by location and price of their choice, and
providing information about the safety of the ticket retailer’s website.</li>
</ul><ul>
<li>The end user will be a muisc lover who wants to find quickly the best ticket deal to go see
their favorite artist. In order to do so, they will browse for RaveFinder and be able to use it
either from their phone, laptop or desktop.
The application will help them to find a ticket for a concert/festival deal straight forward
without having to waste time looking through different unsafe websites. The design will be
simple and intuitive so that the user gets forwarded to the ticket purchase website quickly and
they’re satisfied after using RaveFinder.</li>
</ul><h2>Technologies Used</h2>
<hr><ul>
<li>HTML</li>
</ul><ul>
<li>CSS</li>
</ul><ul>
<li>JavaScript</li>
</ul><ul>
<li>React</li>
</ul><ul>
<li>NodeJS</li>
</ul><h2>Features</h2>
<hr><ul>
<li>Events display functionality: Users will type the artist they would like to see live and select a country, city, and ticket starting price according to their budget using the HomePage search form and will see the results collected from Ticketmaster’s API</li>
</ul><ul>
<li>EventInfo funtionality: Users will click on an event from the event page results and the name of the event, title, description, purchase button link, performing artists in the event section and additional products (parking) will be displayed</li>
</ul><ul>
<li>Artist Top Track Spotify Playlist Functionality: Users will find an Iframe contaning a compilation of the Top Tracks of the artist that is playing in the event page of the event they were looking into</li>
</ul><ul>
<li>Contact functionality: Users will click on “CONTACT US” and it’ll open the user’s email client desktop application (Outlook, Mail etc)</li>
</ul><h2>Setup</h2>
<hr><p>Dependencies used:</p>
<p>Node.js, React.js</p>
<p>APIS used:
● TicketMaster API, CountriesNow API</p>
<p>Node packages used:</p>
<ul>
<li>React-helmet: To give pages names and descriptions and improve overall the SEO pereformance of the website</li>
<li>Axios: To make all API call requests to both of the APIS used in this project.
-React Select: To create the selectors used in the search form in the HomePage</li>
<li>Sass: To be able to compile scss to css directly in the app.</li>
</ul><h5>Steps</h5><ul>
<li>Download Node from https://nodejs.org/en/download and install it based on your Operating System.</li>
</ul><ul>
<li>Install React typing "create-react-app"</li>
</ul><ul>
<li>Install all dependencies by typing "npm install"</li>
</ul><h2>Usage</h2>
<hr><p>A user can look for events for an specific artist by typing their name in the search bar of the Home Page and that will retrieve all the information from TicketMaster's API about that artist rendering the Events page below.</p>
<p>From the event search results when clicking on one event, the user will be forwarded to the event info page of the select event. In this page, as well as in the events page the user will be able to click on any of the buttons on the right side, either to go purchase the ticket in the vendor's website or be redirected to the parking's purchase website for that event.</p>
<p>Besides, in the event info page, the user will find an additional button where they'll be able to click on and be redirected to ticket master's website directly to see more events by the artist they looked for.</p>
<p>Moreover, the user will find a list of all the performing artists at the bottom of the event page info, including their socials and top tracks on Spotify.</p><h2>Project Status</h2>
<hr><p>In Progress</p><h2>Improvements</h2>
<hr><ul>
<li>Deploy website with FireBase</li>
</ul><ul>
<li>Complete ContactForm</li>
</ul><ul>
<li>Include the number of additional events from the artist on Event Page Info</li>
</ul><h2>Features that can be added</h2>
<hr><ul>
<li>See more Events from Artist” button replaced by Dynamic List of more upcoming
events by the artist, where each item is just the post of the event and when being
clicked on, it renders the EventPageInfo for that event. You would be able to scroll
through the list by clicking on the side arrows.</li>
</ul><ul>
<li>Website translated to Spanish, Portuguese, Chinese and French</li>
</ul><ul>
<li>RaveFinder’s newsletter suscription option in footer and header, where users would have alerts about new events to be able to purchase them as soon as they’re posted.</li>
</ul><h2>Acknowledgement</h2>
<hr><ul>
<li>This projects was inspired by SkyScanner and Kayak, since they are third party provider of plane tickets. In this case, the idea is similar but is meant to help music lovers find safe websites to purhcase tickets for a concert of their favorite artist.</li>
</ul><h2>Contact</h2>
<hr><p><span style="margin-right: 30px;"></span><a href="https://www.linkedin.com/in/jaime-villanua-de-juan"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style="width: 10%;"></a><span style="margin-right: 30px;"></span><a href="https://github.com/jvpoly/"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="width: 10%;"></a></p>

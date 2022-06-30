# Newsroom Team Branding Assessment

## Personal notes

- I scanned all the spacing and colors properties before starting to code, to build a reusable and organised styling file. This way is also easier to build different themes (both color schemes and spacing schemes) to improve the UX.

- I built the navbar from scratch (instead of importing the one from the website provided) and created a javascript file to implement the dark-mode and the sidebar features.

- On mobile device, the sidebar will lock the body it's current scrolled position and won't scroll up upon closing the sidebar.

- Added dark/light mode feature. Implemented an icon for the switch.
  NB. I intentionally decided not to implement the default mode selector via "prefers-color-scheme", but would definitely suggest its implementation in a production environment.
  It's a "beta" feature to demonstrate how easily it is to add extra themes via SCSS variables.

- I opted for a 800px breapoint instead of 600px to guarantee a better UX given the layout.

- I haven't changed the styling of the searchbar input in the sidebar. Since there is already a sidebar in the navbar I am not sure what's the purpose of that additional search bar.

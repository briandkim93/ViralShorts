# ViralShorts
Single-page web application created using React JS and Bootstrap CSS. 

Based on a user's search query, ViralShorts implements the YouTube Data API to play the most-viewed YouTube videos that are also less than 4 minutes long. The top 50 most popular search results are returned, as per the limit of the API's search function.

To run on a local machine, have the latest versions of Node.js and React.js installed.

In the file src/components/api-key.js, store and export your Google API key in a constant named GOOGLE_API_KEY.

Then execute the following commands while in the ViralShorts directory:

```
npm install
npm install --save youtube-api-v3-search
npm start
```
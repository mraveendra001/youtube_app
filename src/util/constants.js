const GOOGLE_API_KEY="AIzaSyBp-fsn0XRGPKBBODRTXtwpykPsDBeOwU4";
export const YOUTUBE_VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SHORTS_API = "https://www.googleapis.com/youtube/v3/search?key="+GOOGLE_API_KEY+"&part=snippet&maxResults=10&type=video&videoDefinition=high";

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
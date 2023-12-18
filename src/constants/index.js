// referencias de valores fijos provenientes del api
const base_url = 'https://api.musixmatch.com/ws/1.1/';
const chart_track_get = 'chart.tracks.get?chart_name=top&page=1&page_size=10&f_has_lyrics=1';
const api_key = '&apikey=a25de6d3f0d971414744e3eb137753e5';
const track_search = 'track.search?q_track=';
const track_search_params = '&page_size=10&page=1&s_track_rating=desc';
const track_lyrics_get = 'track.lyrics.get?commontrack_id=';
const track_get = 'track.get?commontrack_id=';


// funciones que van a envolver las apis
export const chartTracksGet = () => `${base_url}${chart_track_get}${api_key}`;
export const trackSearch = (q_track) => `${base_url}${track_search}${q_track}${track_search_params}${api_key}`;
export const trackLyricsGet = (commontrack_id) => `${base_url}${track_lyrics_get}${commontrack_id}${api_key}`;
export const trackGet = (commontrack_id) => `${base_url}${track_get}${commontrack_id}${api_key}`;
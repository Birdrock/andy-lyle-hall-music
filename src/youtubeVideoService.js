import axios from "axios";

const getVideos = () => {
    return axios.get('videos.json');
}

const videoService = {
    cache: null,
    request: () => {
        if (this.cache == null) {
            getVideos()
            .then(res => {
                this.cache = res.data && res.data.videos;
            })
            .catch(() => {
                console.warn('Error fetching video manifest');
            })
        } else {
            return this.cache;
        }
    }
}

export default videoService
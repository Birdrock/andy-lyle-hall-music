import axios from "axios";

const getVideos = () => {
    return axios.get('videos.json');
}

const videoService = {
    cache: null,
    request: () => {
        if (!this.cache) {
            return getVideos()
            .then(res => {
                this.cache = [...(res.data && res.data.videos)];
                return this.cache;
            })
            .catch((e) => {
                return Promise.reject(e);;
            })
        } else {
            return Promise.resolve(this.cache);
        }
    }
}

export default videoService
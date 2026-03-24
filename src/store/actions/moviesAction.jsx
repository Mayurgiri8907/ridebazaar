import axios from "../../utils/axios"
import { showmovie } from "../reducers/movies";

export const asyncshowmovie = (id) => async (dispatch, getstate) => {
    try {
        const details = await axios.get(`movie/${id}`);
        const externalid = await axios.get(`movie/${id}/external_ids`);
        const recommendations = await axios.get(`movie/${id}/recommendations`);
        const similar = await axios.get(`movie/${id}/similar`);
        const videos = await axios.get(`movie/${id}/videos`);
        const watchproviders = await axios.get(`movie/${id}/watch/providers`);

        let allmovie = {
            details : details.data,
            externalid : externalid.data,
            recommendations : recommendations.data,
            similar : similar.data,
            videos : videos.data.results.find((m) => m.type === 'Trailer'),
            watchproviders : watchproviders.data.results.IN,
        }

        dispatch(showmovie(allmovie));
        console.log(allmovie);

    } catch (error) {
        console.log(error);
    }
}
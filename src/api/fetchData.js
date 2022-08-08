import axios from "axios";
import wrapPromise from "./wrapPromise";

const fetchData = (url) => {
    const promise = axios.get(url)
    .then(res => res)
    .catch(err => console.log(err));
    return wrapPromise(promise);
}

export default fetchData;
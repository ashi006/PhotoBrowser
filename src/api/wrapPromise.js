const wrapPromise = (promise) => {
    let status = "pending";
    let result;
    let suspender = promise.then(
        res => {
            status = "success";
            result = res;
        },
        err => {
            status = "error";
            result = err;
        }
    );

    return {
        read() {
            if(status === "pending")
                throw suspender;
            else if(status === "error")
                throw result;
            else if(status === "success")
                return {data: result.data, totalCount: result.headers["x-total-count"]};
        }
    };
}

export default wrapPromise;
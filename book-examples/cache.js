function cache(url){
    const cache = {};
    if(cache[url]){
        return cache[url];
    }
    else{
        console.log("get data from server...");
        cache[url];
        return cache;
    }
}

cache("This is a URL");
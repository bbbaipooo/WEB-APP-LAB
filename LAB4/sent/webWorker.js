function dateCount ()  {
    postMessage(new Date());
    setTimeout(dateCount,1000);
}

dateCount();
self.addEventListener("install",event=>{
    console.log("service worker installed");
    self.skipWaiting();

});
self.addEventListener("activate",event=>{
    console.log("service worker activate");

});
self.addEventListener("fetch",event=>
{
    event.respondWith(fetch(event.request));
});

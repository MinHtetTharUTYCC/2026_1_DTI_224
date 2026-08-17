const CACHE_NAME = "minhthethar-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./week_1_resume/resume.html",
  "./week_2_hobby/hobby.html",
  "./week_2_hobby/style.css",
  "./week_3_js1/js_one.html",
  "./week_4_js2/grading.html",
  "./week_5_js3/change.html",
  "./week_5_js3/loop.html",
  "./week_6_html_dom/distance.html",
  "./week_6_html_dom/todo.html",
  "./icons/mht-icon-192x192.png",
  "./icons/mht-icon-512x512.png",
  "./icons/mht-icon-512x512-maskable.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b7ac88f74cf024c25d1122a9618d1906"
  },
  {
    "url": "assets/css/0.styles.b3f75d32.css",
    "revision": "4afb08d73e7a4c6f2bc78f982e7c8d00"
  },
  {
    "url": "assets/fonts/codicon.a609dc0f.ttf",
    "revision": "a609dc0f334a7d4e64205247c4e8b97c"
  },
  {
    "url": "assets/img/2020-ts-download.527b75f6.png",
    "revision": "527b75f61ae853214a970e6ace1b8f40"
  },
  {
    "url": "assets/img/docs.77834bc4.png",
    "revision": "77834bc47a88da6ebaa3ec6c5085d202"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat-zhifubao-pay.c574ee9e.png",
    "revision": "c574ee9ea0fcc9370d0c3b5ac12a7981"
  },
  {
    "url": "assets/js/10.75e19bad.js",
    "revision": "e14b2c035445623101bad4b5795cc711"
  },
  {
    "url": "assets/js/11.7599c159.js",
    "revision": "6322cd6c4917914a2affe8ceabc254f2"
  },
  {
    "url": "assets/js/12.2fdca93f.js",
    "revision": "f5700edab8a62ae99141c43ee6be30cb"
  },
  {
    "url": "assets/js/13.9dcbdfec.js",
    "revision": "3f0ddd9759a7f674aa5cb808a7ccd879"
  },
  {
    "url": "assets/js/14.314d24d9.js",
    "revision": "a5139450c6d0eea8336996563c5f6011"
  },
  {
    "url": "assets/js/15.1026d846.js",
    "revision": "4ad439d98ea6d521890ef7e14b2b3aaf"
  },
  {
    "url": "assets/js/16.eed6f820.js",
    "revision": "1b2078b445173447add9578ec84eb981"
  },
  {
    "url": "assets/js/17.fd282412.js",
    "revision": "dedab368d972199e52ecfd30699b6f7e"
  },
  {
    "url": "assets/js/18.3ab5dadd.js",
    "revision": "6358b49f495647ab8c34d71369653a12"
  },
  {
    "url": "assets/js/19.93337006.js",
    "revision": "5ed124abba36a794f3f8672f8f44e20d"
  },
  {
    "url": "assets/js/20.c43b41ec.js",
    "revision": "8417c17a247dc5f5496df9a7a7cd023d"
  },
  {
    "url": "assets/js/21.9e8d18be.js",
    "revision": "f104ceb8cd2a477556d2f32b5534e961"
  },
  {
    "url": "assets/js/22.fe29f312.js",
    "revision": "406da29af8b1329f09d0b48e73cbf11a"
  },
  {
    "url": "assets/js/23.61b84115.js",
    "revision": "0e9682597c5bc7fe86f9342162daa747"
  },
  {
    "url": "assets/js/24.205d9dd7.js",
    "revision": "cbc27d11e4376a6a31d9dd3cd468f307"
  },
  {
    "url": "assets/js/25.d358ec1a.js",
    "revision": "8d17d9a15bced5a37e8f5df41e109289"
  },
  {
    "url": "assets/js/26.15f81cac.js",
    "revision": "b7c857f1542ea0913a101a23e94f49be"
  },
  {
    "url": "assets/js/27.81443b44.js",
    "revision": "a314802e580e50d6cd3243746a59ec36"
  },
  {
    "url": "assets/js/28.f12d9d7a.js",
    "revision": "ea1ebe05a6231f8cbd9b0a7ac741123e"
  },
  {
    "url": "assets/js/29.c536b884.js",
    "revision": "1fe509a14b7a2c16ab30b6df593f6c0d"
  },
  {
    "url": "assets/js/3.1b31d579.js",
    "revision": "2908e5740e7a71524a1098f74723bfe0"
  },
  {
    "url": "assets/js/30.638faff5.js",
    "revision": "8af39222331a525b9a945a615399d994"
  },
  {
    "url": "assets/js/31.c9a20e6c.js",
    "revision": "9b6993107ab47196d8d8b95292468ebf"
  },
  {
    "url": "assets/js/32.a6cf6384.js",
    "revision": "10ec5938003ad4fa28f34da5b54dcba3"
  },
  {
    "url": "assets/js/33.164ae6a3.js",
    "revision": "a9f82982ee77920765a8b09391e7151f"
  },
  {
    "url": "assets/js/34.518cfacc.js",
    "revision": "aa804d2fb27fe9c9c99f586dcb77606e"
  },
  {
    "url": "assets/js/35.1da2ce0a.js",
    "revision": "9d8f3d7d4dedb39c8ba67e74b768081c"
  },
  {
    "url": "assets/js/36.1e4e7a17.js",
    "revision": "63f34ae0616b982ab10d6f2fdf195f81"
  },
  {
    "url": "assets/js/37.ac9d5064.js",
    "revision": "0d9467a1ef6206b9eddeeadf99463d19"
  },
  {
    "url": "assets/js/38.271cbe0a.js",
    "revision": "073e610117611521d8233a4cf23cfd45"
  },
  {
    "url": "assets/js/39.34490a45.js",
    "revision": "b40a17b688288d2ef12e94e314dad104"
  },
  {
    "url": "assets/js/4.e5d5e524.js",
    "revision": "9fecb1507f7742740516eda3b8e73d34"
  },
  {
    "url": "assets/js/40.47b19711.js",
    "revision": "12e7086d6fc7f7a7cf547c88cbb1184b"
  },
  {
    "url": "assets/js/41.5f19869a.js",
    "revision": "cd6d0825f508f07605695e6ec7dada58"
  },
  {
    "url": "assets/js/42.eff70619.js",
    "revision": "4a0f2541ef4a0a7b4268c2e83e4647c4"
  },
  {
    "url": "assets/js/43.60a1d58d.js",
    "revision": "472c7602c366c0542f015073f43c7961"
  },
  {
    "url": "assets/js/44.fd843f34.js",
    "revision": "323c8b14f24f45211abd9bbc7a8a8cb6"
  },
  {
    "url": "assets/js/45.393fb4b8.js",
    "revision": "03ce52cd5a4c7ae501aef91e26c77d3c"
  },
  {
    "url": "assets/js/46.89f36080.js",
    "revision": "330b5f5e7d52e0e9377c631038b0bb33"
  },
  {
    "url": "assets/js/5.a337e0f8.js",
    "revision": "aecc52216b5ac82b20688ea264e41887"
  },
  {
    "url": "assets/js/6.8b9b9204.js",
    "revision": "ee217d5d8d7ec567d57a5ebae6c07d6b"
  },
  {
    "url": "assets/js/7.b7698653.js",
    "revision": "8ab303393a6998ecc0a7aac277180826"
  },
  {
    "url": "assets/js/8.988c3b1f.js",
    "revision": "7927f87f43b30db091fc0641b4c9fee0"
  },
  {
    "url": "assets/js/9.6aa2b87d.js",
    "revision": "2acc901664d70c2659edb1f247d86889"
  },
  {
    "url": "assets/js/app.1d912f26.js",
    "revision": "95b43f86a40ed83bdcff24ac8cc1f50b"
  },
  {
    "url": "editor.worker.js",
    "revision": "aad761805882c1dd9b31ce790588402a"
  },
  {
    "url": "images/docs.png",
    "revision": "77834bc47a88da6ebaa3ec6c5085d202"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "990c5e0b1dfe6fb536ee09eec59465cd"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f8dc7fb1af07531e2246e9830f51edc7"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "0c311dc8a891275aaf6c470b93aa2074"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "65093a8d112a4d8b45953084fbb16487"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "eff562dd276ec4a5989ed0fb74c7fea0"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a9af55f93b2cf1d325951fde149826f7"
  },
  {
    "url": "index.html",
    "revision": "a4c967c94713212ac0bb11712a61f832"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "ts-logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "zh/advanced-types/index.html",
    "revision": "94587b3ec605ae8c638e299ef87c839e"
  },
  {
    "url": "zh/advanced-types/intersection-types/index.html",
    "revision": "68bee930a10ab7e2d8079d7afa34659f"
  },
  {
    "url": "zh/advanced-types/nullable/index.html",
    "revision": "c6b8d6be41352ee0d15e1c76a15e7558"
  },
  {
    "url": "zh/advanced-types/type-guard/index.html",
    "revision": "c7e2ff78e9769c8bd805557904102174"
  },
  {
    "url": "zh/advanced-types/union-types/index.html",
    "revision": "d757787faa62813c03a87a3182495beb"
  },
  {
    "url": "zh/array/index.html",
    "revision": "b0e4f0882c5964ed8643fec9349ffe3b"
  },
  {
    "url": "zh/basic/index.html",
    "revision": "5416997a098d00ed01f10b8327f6e904"
  },
  {
    "url": "zh/built-in-objects/index.html",
    "revision": "7246f2a94936cdd4320acee25ac5585e"
  },
  {
    "url": "zh/class/index.html",
    "revision": "9be7bd04e01c72a15b8687a42142f629"
  },
  {
    "url": "zh/compile-config/index.html",
    "revision": "79c188ef83ad18a89f19d88eb56522d9"
  },
  {
    "url": "zh/decorators/index.html",
    "revision": "c9462d36f961de8e9e32fdd8ccf1467d"
  },
  {
    "url": "zh/faqs/index.html",
    "revision": "c10518bb087676022fa896f47670386b"
  },
  {
    "url": "zh/function/index.html",
    "revision": "a50d0faabf0e540b6998ff6018507796"
  },
  {
    "url": "zh/generics/index.html",
    "revision": "e6a4497577ee6cbf5e8d7bb0d3304028"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a9d8630c184a82ddde97a95dc875d3c4"
  },
  {
    "url": "zh/interface/index.html",
    "revision": "da59985b29fa4b529919625283089194"
  },
  {
    "url": "zh/keyword/extends/index.html",
    "revision": "76ab2b714ddb9f3471bd6b8996e48311"
  },
  {
    "url": "zh/keyword/implements/index.html",
    "revision": "cc1bac0eb47ff4d3d789a57675ef8c50"
  },
  {
    "url": "zh/keyword/in/index.html",
    "revision": "6295549dacf954697613bdbc69aadee5"
  },
  {
    "url": "zh/keyword/index.html",
    "revision": "4b771ed2596327e9126048e10d922182"
  },
  {
    "url": "zh/keyword/infer/index.html",
    "revision": "3a5916f98d513d4ec4b6ddf8907b6903"
  },
  {
    "url": "zh/keyword/instanceof/index.html",
    "revision": "19d828bc68c58f374159ff860aac4073"
  },
  {
    "url": "zh/keyword/is/index.html",
    "revision": "2d598539b7aae0f08d91f47e5b9c90d7"
  },
  {
    "url": "zh/keyword/keyof/index.html",
    "revision": "7ea343d6289572b77714871e1c607251"
  },
  {
    "url": "zh/keyword/typeof/index.html",
    "revision": "bfd802fac576e24b336af5c3e32d84b2"
  },
  {
    "url": "zh/operator/index.html",
    "revision": "91238e67d0edba0b481c3dc1af07bb64"
  },
  {
    "url": "zh/tips/index.html",
    "revision": "39152e346f5b387c3a85aff37e4c31d1"
  },
  {
    "url": "zh/type-assertion/index.html",
    "revision": "d2c0d010027831cf52198eee0a361f3c"
  },
  {
    "url": "zh/utility-types/index.html",
    "revision": "de3f92c7884e7617127d7f5912c70406"
  },
  {
    "url": "zh/what-is-typescript/index.html",
    "revision": "b6bfd930baef57b96898a454190f8ce3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

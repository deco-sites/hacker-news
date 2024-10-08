// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$$$$$$$$$0 from "./apps/deco/htmx.ts";
import * as $$$$$$$$$$$1 from "./apps/site.ts";
import * as $$$0 from "./loaders/posts.ts";
import * as $$$1 from "./loaders/postsIds.ts";
import * as $$$$$$0 from "./sections/Feed.tsx";
import * as $$$$$$1 from "./sections/Footer.tsx";
import * as $$$$$$2 from "./sections/ItWorks.tsx";
import * as $$$$$$3 from "./sections/Theme/Theme.tsx";

const manifest = {
  "loaders": {
    "site/loaders/posts.ts": $$$0,
    "site/loaders/postsIds.ts": $$$1,
  },
  "sections": {
    "site/sections/Feed.tsx": $$$$$$0,
    "site/sections/Footer.tsx": $$$$$$1,
    "site/sections/ItWorks.tsx": $$$$$$2,
    "site/sections/Theme/Theme.tsx": $$$$$$3,
  },
  "apps": {
    "site/apps/deco/htmx.ts": $$$$$$$$$$$0,
    "site/apps/site.ts": $$$$$$$$$$$1,
  },
  "name": "site",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;

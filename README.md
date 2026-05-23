# w7s-io-demo

Small W7S deployment demo with both native backend and static frontend assets.

Layout:

- `backend/index.js`: native Worker app deployed by W7S.
- `frontend/dist`: prebuilt static frontend served before backend fallback.
- `.github/workflows/deploy.yml`: deploys this repo with the reusable W7S deploy action.

After deployment, the app URL is:

```text
https://guerrerocarlos.w7s.cloud/w7s-io-demo/
```

The public wildcard route must point at the new `w7s-io` core Worker for that URL to resolve.


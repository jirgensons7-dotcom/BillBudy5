# BillBuddy 5 (Android, Expo SDK 54)

Minimal, crash‑proof starter ready for EAS APK builds.

## Quick start
```bash
npm install
npx expo-doctor --fix
npm start
```

## Build APK on EAS
```bash
eas login
eas whoami
eas build -p android --profile production
```

### Notes
- App icon is 512×512 (assets/icon.png).
- `appVersionSource` is `remote` in `eas.json` so versionCode auto-increments on EAS.
- You can change `android.package` and `expo.name` in `app.json` later if needed.
- This template avoids `expo-router` to reduce dependency conflicts.

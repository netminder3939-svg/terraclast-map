# Terraclast Strategy Map

A free, one-file map for planning Terraclast towers with your alliance (Rathdrum to Spokane).
Everything is in `index.html`. There's no build step, no accounts and no keys.

## Put it online with GitHub Pages (about 5 minutes)
1. Sign in at github.com and click **New repository**. Name it `terraclast`, set it to **Public**, and click **Create**.
2. Click **uploading an existing file**. Drag in `index.html`, `README.md` and `sample-plan.json`, then click **Commit changes**.
3. Go to **Settings → Pages**. Under "Branch" pick **main** and **/ (root)**, then click **Save**.
4. Wait about a minute. Your link is `https://YOUR-USERNAME.github.io/terraclast/`. Send it to the alliance.
5. On a phone, open the link and use **Share → Add to Home Screen** so it works like an app.

## Using it
The **❓ Help** tab has the 5 steps. Turn on **Advanced** for the attack calculator, upkeep, resources, zones, upgrades and the log.

## Sharing one plan with the alliance (no server)
Each person's map is saved on their own phone. You have two ways to share:
- **Simple:** go to **💾 Share → Export plan** and send the file in Discord. Others use **Merge import**, which adds your towers and keeps theirs.
- **One shared plan.json in the repo:**
  1. One person (the "map keeper") exports the plan, renames it `plan.json` and uploads it to the repo, replacing the old one.
  2. Everyone goes to **Advanced → 💾 Share → Shared plan URL** and pastes
     `https://YOUR-USERNAME.github.io/terraclast/plan.json`
  3. The map merges that file every time it opens, and **🔄 Refresh** pulls it again.
  4. To add towers to the shared plan, send your export to the map keeper. They merge it, export again and re-upload `plan.json`.
  GitHub Pages can take a minute or two to update after an upload. A raw GitHub Gist URL works too.

## Notes and limits
- The hex grid is approximate (174 m edges). Line it up in **Map → Hex grid**.
- Defense, upkeep and upgrade costs between L1 and L10 are estimates.
- Routes use the free public OSRM demo server. If it's down, the map draws straight lines.
  Google Maps links are split into legs of up to 10 stops. Apple Maps multi-stop links need iOS 16 or later; older versions may only show the first stop.
- Upkeep notifications only fire while the page is open. Use the .ics calendar reminder for a daily alert.
- Map tiles come from Esri, with a backup provider.
- `sample-plan.json` is a small test plan. Load it with Merge import to try things out, and delete the towers afterward.

## Quick tag while you play
- Tap **📍 Tag here**. The map finds the hex you're standing in (needs the https/GitHub Pages link and location permission). If location is off, it tags the hex in the middle of the map and tells you so.
- One tap saves it: Wood, Food, Water, Scrap, POI, Enemy, or ⭐ good spot. Tap the same button again to remove it, or use 🧹 Clear.
- Long-press any hex on the map (right-click on a computer) to tag that hex instead.
- The map can't see inside Terraclast. You pick what's on the tile yourself. Tags go out with Export/Merge like everything else.

## Pocket buddy (bottom-left buttons, no server needed)
- **💬 Discord**: add your alliance Discord invite once (or in 💾 Share → Alliance Discord link). It's saved and included in Export/plan.json, so allies who Merge get the button too. It's greyed out until a link is set.
- **⏱️ Timers**: shield/attack cooldown countdowns. Open from the button, or from a tile's Tag sheet or a tower's dialog (⏱️ Timer). The presets (15m to 24h) are guesses because exact game cooldowns aren't known, so use Custom minutes. Timers survive reloads. 📅 on a timer downloads a calendar alarm for its end time.
- **🍖 Feed towers**: pick a daily time and tap Remind me. 📅 adds a daily repeating iPhone calendar alarm.
- **Honest note:** toasts, vibration, sound and notifications only fire while the page is open. Use the 📅 calendar files if you want an alarm when it's closed.

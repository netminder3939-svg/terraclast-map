# Terraclast Alliance Command (v7)

Free, static alliance map + hub for Terraclast. No server, no accounts. Runs on GitHub Pages.
Live: https://netminder3939-svg.github.io/terraclast-map/ · Discord: https://discord.gg/yJyajnZdbb

## Files (repo root)
| File | What it is |
|---|---|
| `index.html` | The whole app (map, tools, board, hub). |
| `plan.json` | The shared alliance plan. Everyone's map loads it automatically. |
| `manifest.json`, `sw.js`, `icon-180/192/512.png` | Add to Home Screen + offline. |
| `sample-plan.json` | Small example plan. |

## Tabs
- **Map**: every player's towers as colored hexes with the level (gold border = Live). Legend top-left: tap a name to hide/show, tap **All players / Just me**.
- **Tools**: upkeep check, Today's run, attack check, upgrade planner, ⚙️ Numbers (editable game numbers; yellow = estimates).
- **Board**: pick who you are, see **My next thing**, and a card per player (green daily income, live/planned, total defense, next upgrade ETA, towers with ETA + attack/defense per level).
- **Hub**: Discord, how to send your update, ops board (runs/targets/builds), resource-spot directory, game guide (official facts), install steps.
- **Players**: names, colors, roles, green daily income.
- Tower popup: 🧭 Maps (directions) and 🔗 Link (opens the map focused on that tower: `...#t=towerId`).

## How the shared plan works
1. Each player enters their green income and plans or tags towers, then taps **📤 Send my update** and posts the file in Discord.
2. Jacob opens his map, 💾 Share → **Merge import** each file, then Share → **Export plan**, renames it to `plan.json` and uploads it here, replacing the old one.
3. Everyone's map checks `plan.json` on open. If it changed, it **adds** new towers, players, spots and ops and updates income that is newer. It never overwrites a tower you already have or edited, and it won't bring back towers you deleted.

## Install on iPhone
Safari → Share → Add to Home Screen. Works offline after the first visit (map tiles you have viewed are cached).

## Game numbers
Official: tower build 10 wood; defense (= attack) 10 at L1 to 155 at L10; upkeep 1/1 at L1 to 12/8 at L10; base income +1/day at L1 to +6/day at L10.
Estimates (edit in Tools → ⚙️ Numbers): every level between L1 and L10, and upgrade costs (10 wood + 10 scrap for L1→2, doubling each level).

/**
  {
    "api": 1,
    "name": "Slugify",
    "description": "Slugify text",
    "author": "CreativityKills",
    "icon": "textformat.abc",
    "tags": "text,slug"
  }
**/
function main(state) {
  state.text = state.text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

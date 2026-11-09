const fs = require("fs");
const path = require("path");
const CERT = /（.+認證：.+）/;
const ROOT = path.join(__dirname, "..");

function extract(src) {
  const out = [];
  const re =
    /\{\s*\n\s*id:\s*(\d+),\s*\n\s*stage:\s*"([^"]+)",(?:\s*\n\s*[a-zA-Z]+:\s*(?:"[^"]*"|[^,\n]+),)*\s*\n\s*text:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(src))) {
    out.push({ id: Number(m[1]), text: JSON.parse(`"${m[3]}"`) });
  }
  return out;
}

for (const f of ["human.js", "asura.js"]) {
  const src = fs.readFileSync(path.join(ROOT, "data", f), "utf8");
  const qs = extract(src);
  const bad = qs.filter((q) => !CERT.test(q.text) || /【/.test(q.text));
  const endingIds = (src.match(/id:\s*"[^"]+"/g) || []).length;
  console.log(f, "Q=", qs.length, "bad=", bad.length, "endingIds=", endingIds);
  if (bad.length) console.log(bad);
}

const fs = require(`fs`);

function writeJSON(newsJSON, fileName) {
  try {
    const newsPath = `public/json/${fileName}.json`;
    fs.writeFileSync(newsPath, JSON.stringify(newsJSON), `utf-8`);
    updateMinutes(`public/json/time.json`);
  } catch (err) {
    throw new Error(`writeJSOn() ` + err.message);
  }
}

function checkFiles(fileName) {
  const path = `public/json/${fileName}.json`;

  try {
    return fs.existsSync(path);
  } catch (err) {
    console.error(`checkFiles() ` + err.message);
  }
}

function readJSON(fileName) {
  try {
    return fs.readFileSync(`public/json/${fileName}.json`);
  } catch (err) {
    throw new Error(`readJSON() ` + err.message);
  }
}

function updateMinutes(path) {
  const lastUpdate = {
    minutes: new Date().getMinutes(),
  };

  try {
    fs.writeFileSync(path, JSON.stringify(lastUpdate), "utf-8");
  } catch (err) {
    throw new Error(`updateMinutes() ` + err.message);
  }
}

exports.writeJSON = writeJSON;
exports.checkFiles = checkFiles;
exports.readJSON = readJSON;

const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src/components');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('px-4 md:px-8')) {
    content = content.replace(/px-4 md:px-8/g, 'px-8 md:px-16 lg:px-24');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated padding in ' + file);
  }
});

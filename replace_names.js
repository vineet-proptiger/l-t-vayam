const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.next' && f !== '.git') {
        walkDir(dirPath, callback);
      }
    } else {
      if (f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.json') || f.endsWith('.ts') || f.endsWith('.tsx')) {
        callback(dirPath);
      }
    }
  });
}

walkDir('.', function(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // Specific phrases first
  newContent = newContent.replace(/L&amp;T Vayam/gi, 'L&amp;T Vayam');
  newContent = newContent.replace(/L&T Vayam/gi, 'L&T Vayam');
  newContent = newContent.replace(/lt-vayam/gi, 'lt-vayam');
  newContent = newContent.replace(/lntvayam/gi, 'lntvayam');

  // General catch-all
  newContent = newContent.replace(/Vayam/gi, 'Vayam');

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated:', filePath);
  }
});

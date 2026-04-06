const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.existsSync(dirPath)) {
      let isDirectory = fs.statSync(dirPath).isDirectory();
      isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    }
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    
    // Replace old colors with new background/foreground vars
    newContent = newContent.replace(/bg-sg-black/g, 'bg-background');
    newContent = newContent.replace(/text-sg-white\/(\d+)/g, 'text-foreground/$1');
    newContent = newContent.replace(/text-sg-white/g, 'text-foreground');
    newContent = newContent.replace(/bg-sg-white/g, 'bg-foreground');
    newContent = newContent.replace(/text-sg-black/g, 'text-background');
    newContent = newContent.replace(/border-white(\/| )/g, 'border-foreground$1');
    // For specific instances like bg-sg-black/90
    newContent = newContent.replace(/bg-background\/(\d+)/g, 'bg-background/$1');

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Updated', filePath);
    }
  }
});

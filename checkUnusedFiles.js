const fs = require("fs");
const path = require("path");

// Helper function to get all files in a directory recursively
const getAllFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fileList = getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
};

// Get all files in the public directory
const publicDir = path.join(__dirname, "public");
const publicFiles = getAllFiles(publicDir);

console.log(`Found ${publicFiles.length} files in the public directory.`);

// Get all files in the app directory
const appDir = path.join(__dirname, "app");
const appFiles = getAllFiles(appDir);

console.log(`Found ${appFiles.length} files in the app directory.`);

// Helper function to check if a file is used in the app directory
const isFileUsed = (filePath, allAppFiles) => {
  const fileName = path.basename(filePath);
  for (const file of allAppFiles) {
    const content = fs.readFileSync(file, "utf8");
    if (content.includes(fileName)) {
      return true;
    }
  }
  return false;
};

// Find unused files in the public directory
const unusedFiles = publicFiles.filter((file) => !isFileUsed(file, appFiles));

// Print unused files
if (unusedFiles.length === 0) {
  console.log("No unused files found in the public directory.");
} else {
  console.log("Unused files in the public directory:");
  unusedFiles.forEach((file) => console.log(file));
}

console.log("Script execution completed.");

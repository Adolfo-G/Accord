const { parse, join } = require('path');
const { createWriteStream } = require('fs');
const fs = require('fs');

module.exports.readFile = async (file) => {
  const { createReadStream, filename } = await file;
  const stream = createReadStream();
  let { ext, name } = parse(filename);
  name = `single${Math.floor(Math.random() * 10000 + 1)}`;
  let url = join(__dirname, `../upload/${name}-${Date.now()}${ext}`);
  const imageStream = await createWriteStream(url);
  await stream.pipe(imageStream);
  const baseUrl = process.env.BASE_URL;
  const port = process.env.PORT;
  url = `${baseUrl}${port}${url.split('upload')[1]}`;
  return url;
};

module.exports.multipleReadFile = async (file) => {
  let fileUrl = [];
  for (let i = 0; i < file.length; i++) {
    const { createReadStream, filename } = await file[i];
    const stream = createReadStream();
    let { ext, name } = parse(filename);
    name = `single${Math.floor(Math.random() * 10000 + 1)}`;
    let url = join(__dirname, `../upload/${name}-${Date.now()}${ext}`);
    const imageStream = await createWriteStream(url);
    await stream.pipe(imageStream);
    const baseUrl = process.env.BASE_URL;
    const port = process.env.PORT;
    url = `${baseUrl}${port}${url.split('upload')[1]}`;
    fileUrl.push({ url });
  }
  return fileUrl;
};

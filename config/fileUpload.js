const filestack = require("filestack-js");

const client = filestack.init("AKo6v5I19RrWJcjyuwiRvz");

const fileUpload = async (file) => {
  try {
    const res = await client.upload(file.data);
    console.log("file uploaded", res.url);
    return { message: "file uploaded", error: res.url };
  } catch (err) {
    console.log("error uploading file", err.message);
    return { message: "error uploading file", error: err.message };
  }
};

module.exports = fileUpload;

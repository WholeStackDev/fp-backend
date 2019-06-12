const azure = require("azure-storage");

const blobSrv = azure.createBlobService();
blobSrv.createContainerIfNotExists(
  "tracks",
  {
    publicAccessLevel: "blob"
  },
  (error, result, response) => {
    if (!error) {
      console.log(result);
    }
  }
);

module.exports = blobSrv;

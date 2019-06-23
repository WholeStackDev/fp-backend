const azure = require("azure-storage");

const blobSrv = azure.createBlobService();
blobSrv.createContainerIfNotExists(
  "tracks",
  {
    publicAccessLevel: "blob"
  },
  (error, result, response) => {
    if (!error) {
    }
  }
);

module.exports = blobSrv;

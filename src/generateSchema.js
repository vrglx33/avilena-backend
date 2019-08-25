const fs = require('fs');
const {importSchema} = require('graphql-import');

fs.writeFileSync(__dirname+'/built-schema.graphql', importSchema(__dirname+'/schema.graphql'));
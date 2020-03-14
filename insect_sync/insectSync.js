let fetch = require('node-fetch');
let MongoClient = require('mongodb').MongoClient;

const clean = (apiResponse) => {
  const data = apiResponse.map(el => {
    const output = {
      name: el.taxon.common_name ? el.taxon.common_name.name : '', 
      photo_links: el.photos.map(photo => photo.medium_url)
    }
    return output;
  }).filter(el => el.name);
  return data;
};

const insert = (cleanedData) => {
  MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
    console.log('err', err);
    let db = client.db('resumeDB')
    let batch = db.collection('insects').initializeUnorderedBulkOp({useLegacyOps: true})
    
    cleanedData.forEach(record => {
      batch.find({name:record.name}).upsert().updateOne(record)
    })
    
    batch.execute((err, result) => {
      console.log('batch err', err);
      console.log('batch result', result)
    });

    console.log('Upsert complete');
    client.close();
  })
}

fetch('https://www.inaturalist.org/observations.json?iconic_taxa[]=Insecta&iconic_taxa[]=Arachnida&quality_grade=research&per_page=100')
    .then(res => 
      res.json()
        .then(jsonRes => {
          const cleanedData = clean(jsonRes);
          insert(cleanedData);
        })
        .catch(err => console.log(err)))
    .catch(err => console.log(err));
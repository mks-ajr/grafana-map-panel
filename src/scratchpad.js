function parseExtraData(jsonString) {
  try {
    const data = JSON.parse(jsonString)
    if(Array.isArray(data)) {
      return data
    }
    return null
  } catch(err) {
    return null
  }
}

const exampleTableDataWorldMap =
  {
    columns: [{text: 'metric', type: 'number'}, {text: 'longitude', type: 'number'}, {text: 'latitude', type: 'number'}, {text: 'name', type: 'string'}, {text: 'extraData', type: 'string'}],
    rows: [
      [ 14, 61, 61, 'Node 1',  `[ { "label" : "voltage" : "value" : 12.5 }, { "label" : "temperature" : "value" : 29.5 },  { "label" : "status" : "value" : "normal" }]` ],      
      [ 12, 61, 62, 'Node 2',  `[ { "label" : "voltage" : "value" : 11.5 }, { "label" : "temperature" : "value" : 30.5 },  { "label" : "status" : "value" : "warning" }]` ],
      [ 13, 60, 62, 'Node 3',  `[ { "label" : "voltage" : "value" : 13.1 }, { "label" : "temperature" : "value" : 31.5 },  { "label" : "status" : "value" : "normal" }]` ],
      [ 10, 60, 61, 'Node 4',  `[ { "label" : "voltage" : "value" : 12.0 }, { "label" : "temperature" : "value" : 29.9 },  { "label" : "status" : "value" : "normal" }]` ],
    ]
  };
console.log(parseExtraData(`[ { "label" : "voltage", "value" : 12.5 }, { "label" : "temperature", "value" : 29.5 },  { "label" : "status", "value" : "normal" }]`))
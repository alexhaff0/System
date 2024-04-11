const Papa = require('papaparse');
const fs = require('fs');

const csvPath = '/Users/alexhaff/Library/Mobile Documents/com~apple~CloudDocs/My Documents/System/Plugin/👨🏻‍✈️ Cmd K/Command Menu Data - Values.csv'; // Use the full path to the CSV file

const csvString = fs.readFileSync(csvPath, 'utf8'); // Use 'fs.readFileSync' with the updated path

const parsedData = Papa.parse(csvString, {
  header: true,
  delimiter: ',',
});

const modifiedData1 = parsedData.data.map(item => {
  return {
    ...item,
    active: item.active === 'TRUE',
    parameters: item.parameters === 'TRUE'
  };
});



const modifiedData2 = parsedData.data.map(item => {
  return {
    ...item,
    id: item.id ? Number(item.id) : null,
    parent_id: item.parent_id ? Number(item.parent_id) : null,
    active: item.active === 'TRUE',
    parameters: item.parameters === 'TRUE'
  };
});
const filteredData2 = modifiedData2.filter(item => item.active);
const finalData2 = filteredData2.map(({ active, ...rest }) => rest);
const toJSON = JSON.stringify(finalData2);

try {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('default', { month: 'short', day: 'numeric' });
  const fileName = `CmdK Data - ${formattedDate}.json`;

  const filePath = '/Users/alexhaff/Library/Mobile Documents/com~apple~CloudDocs/My Documents/System/Plugin/👨🏻‍✈️ Cmd K/' + fileName;
  fs.writeFileSync(filePath, toJSON);
  console.log('Saved to File');
} catch (error) {
  console.log('Error Saving To File: ', error);
}




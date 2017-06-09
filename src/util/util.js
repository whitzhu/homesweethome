const util = {
  numberFormatter: function numberFormatter(type, num) {
    let finalNum = typeof num === 'number' ? num.toString() : num;
    finalNum = finalNum.split('');
    if (finalNum.indexOf(',') < 0) {
      for (let i = finalNum.length - 3; i >= 0; i -= 3) {
        i !== 0 ? finalNum.splice(i, 0, ',') : null;
      }
    }
    type === 'price' ? finalNum.splice(0, 0, '$') : null;
    return finalNum.join('');
  },
  addressFormatter: function addressFormatter(address) {
    const index = address.indexOf(',');
    const street = address.slice(0, index);
    const state = address.slice(index + 1).trim();
    return [street, state];
  },
  normalizeListing(rawData, callback) {
    const finalData = [];
    for (const listing in rawData) {
      const data =
        {
          beds: rawData[listing].beds,
          baths: rawData[listing].baths,
          address: listing,
          price: rawData[listing].cost,
          sqft: '3000',
          built: null,
          label: util.randomLabelGenerator(),
          thumb: rawData[listing].img,
          url: rawData[listing].url,
        };
      finalData.push(data);
    }
    callback(finalData);
  },
  randomLabelGenerator() {
    const label = {
      1: null,
      2: null,
      4: 'hot',
      5: 'sold',
      6: 'new',
    };
    return label[Math.floor(Math.random() * 7)];
  },
};

export default util;

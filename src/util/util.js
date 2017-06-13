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
    Object.keys(rawData).forEach((listing) => {
      const data =
        {
          beds: rawData[listing].beds,
          baths: rawData[listing].baths,
          address: listing,
          price: rawData[listing].cost.replace(/,/g, ''),
          sqft: util.numberFormatter('sqft', rawData[listing].sq_ft),
          built: null,
          label: util.randomLabelGenerator(),
          thumb: rawData[listing].img,
          url: rawData[listing].url,
        };
      finalData.push(data);
    });
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
  filterPrice(listings, category, sort, callback) {
    function mergeSort(listings) {
      const mid = Math.floor(listings.length / 2);
      if (listings.length < 2) return listings;     
      let left = listings.slice(0, mid);
      let right = listings.slice(mid);
      left = mergeSort(left);
      right = mergeSort(right);
      return merge(left, right);
    }
    
    function merge(left, right) {
      let mergeResult = [];
      while (left.length && right.length) {
        if (parseInt(left[0][category], 10) > parseInt(right[0][category], 10)) {
          mergeResult.push(right.shift());
        } else if (parseInt(left[0][category], 10) < parseInt(right[0][category], 10)) {
          mergeResult.push(left.shift());
        } else {
          mergeResult.push(left.shift());
        }
      }
      if (left.length) {
        mergeResult = mergeResult.concat(left);
      } else if (right.length) {
        mergeResult = mergeResult.concat(right);
      }
      return mergeResult;
    }
    callback(mergeSort(listings));
  },
};

export default util;

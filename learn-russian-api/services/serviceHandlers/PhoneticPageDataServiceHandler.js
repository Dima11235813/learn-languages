var htmlparser = require("htmlparser");

let pageBodyCache = {};

module.exports = (function() {
  let data;
  let analytics;
  const resetData = () => {
    data = {
      img: [],
      div: [],
      headings: {},
      paragraphs: [],
      spans: []
    };
    analytics = {
      countOfHiddenImages: 0
    };
  };
  const setupHandler = (body, resolve, word) => {
    console.log(`Word ${word}`)
    console.log('body')
    console.log(body)
    if (pageBodyCache[word]) {
      console.log(`
      REQUEST REPONSE IN CACHE 
      word: ${word}
      `);
      console.log(pageBodyCache[word]);
      resolve(pageBodyCache[word]);
    } else {
      resetData();
      var handler = new htmlparser.DefaultHandler((error, dom) => {
        if (error) {
          console.log(`Pasing failure, error: ${error}`);
        } else {
          returnData(dom);
          let responseObj = { ...data, ...analytics };
          pageBodyCache[word] = responseObj;
          resolve(responseObj);
        }
      });
      var parser = new htmlparser.Parser(handler);
      parser.parseComplete(body);
    }
  };
  // sys.puts(sys.inspect(handler.dom, false, null));

  const checkForChildren = bodyItem => {
    // conditionallyLogItem(bodyItem);
    checkForImgAttributes(bodyItem);
    checkForDivData(bodyItem);
    checkForHeadings(bodyItem);
    checkForParagraphs(bodyItem);
    // checkForSpans(bodyItem);
    if (bodyItem.children) {
      bodyItem.children.forEach(bodyItem => checkForChildren(bodyItem));
    }
  };
  const checkForImgAttributes = item => {
    if (item.name === "img") {
      let src = item.attribs && item.attribs.src ? item.attribs.src : "";

      if (item.attribs && item.attribs.style) {
        //only save visible images
        if (
          !item.attribs.style.indexOf("display:none") > -1 ||
          !Image.attribs.style.indexOf("visibility:hidden") > -1
        ) {
          //but count how many hidden images there are
          analytics.countOfHiddenImages += 1;
        }
      } else {
        data.img.push({ src });
      }
    }
  };
  const checkForSpans = item => {
    if (item && item.name === "span") {
    }
  };
  const returnFirstChildsRaw = item => {
    return item.children[0].raw;
  };
  const checkForParagraphs = item => {
    if (item && item.name === "p" && item.children) {
      data.paragraphs.push(returnFirstChildsRaw(item));
    }
  };
  const checkForHeadings = item => {
    //If it's a heading save it
    if (item && item.name && item.name.indexOf("h") > -1) {
      let keyToUse = item.name;
      if (item.children) {
        if (data.headings[keyToUse]) {
          data.headings[keyToUse].push(returnFirstChildsRaw(item));
        } else {
          data.headings[keyToUse] = [];
          data.headings[keyToUse].push(returnFirstChildsRaw(item));
        }
      }
    }
  };
  const checkForDivData = item => {
    if (
      item &&
      item.name === "div" &&
      item.type !== "script" &&
      item.type === "tag"
    ) {
      if (item.attribs) {
        //Nothing too meaningful in divs
        // const { attribs } = item;
        // data.div.push(attribs);
      }
    }
  };
  const arrayOfItemNamesWeSave = [
    "a",
    "p",
    "img",
    "span",
    "div",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
  ];
  const conditionallyLogItem = item => {
    if (arrayOfItemNamesWeSave.indexOf(item.name) > -1) {
      console.log(item);
    }
  };
  function returnData(dom) {
    console.log(dom)
    dom.forEach(item => {
      //TODO Find the necessary phonetic data
      // if (item.children) {
      //   //get open, head, body, close
      //   item.children.forEach(item => {
      //     if (item.children && item.name === "body") {
      //       //recursively iterate over body to get all links with images
      //       item.children.forEach(bodyItem => {
      //         checkForChildren(bodyItem);
      //       });
      //     }
      //   });
      // }
    });
  }
  return {
    setupHandler: setupHandler
  };
})();

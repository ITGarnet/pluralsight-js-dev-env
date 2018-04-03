import {expect} from 'chai'; // we will use expect style
import jsdom from 'jsdom';
import fs from 'fs'; //it is comming from node file system

describe ('Our first test', () => {   // we can use function key word but
                                      // we will use arrow fuction for bravity
  it('should pass', ()=> {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {   // we need to pass a parameter
                                      // to specify thet we are calling asynch function
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello Tziki!");
      done(); // we tell mocha that the test is done, so we can see
              // if any chnages have been made inthe next test
      window.close(); // release the memory that we have allocated when created the jsdom environment
    })
  })
})

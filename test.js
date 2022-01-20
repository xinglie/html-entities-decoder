let decode = require('./index');
let expect = (source, result) => {
    if (source != result) {
        console.error('expect:', result, 'source:', source);
    } else {
        console.log('ok:', result);
    }
};

expect(decode('1 &copy; 2 &#34;'), '1 © 2 "');
expect(decode('1 &#x6211;&#25105;'), '1 我我');
expect(decode('1 &#X6211;&#x4eec'), '1 我们');
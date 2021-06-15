module.exports = rawRequest => {

  const data = rawRequest.toString();

  const method1 = data.split('\n')[0].split(' ')[0];
  const path2 = data.split('\n')[0].split(' ')[1];
  const body3 = data.split('\n')[4];


  console.log(rawRequest);

  return {
    method: method1,
    path: path2,
    body: body3

  };

};

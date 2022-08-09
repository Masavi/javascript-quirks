const transpose = function(matrix) {
  const result = []
    
  for (let i = 0; i < matrix[0].length; i++) {
    const result2 = [] // [ [], ...]
    result.push(result2)

    console.log(`\n BEFORE LOOP`);
    console.log(`🚍 Loop #${i}`);
    console.log(`🚒 result`, result);
    console.log(`🛺 result2`, result2);

    for (let j = 0; j < matrix.length; j++) {
      result2.push(matrix[j][i])
    }    

    console.log(`\n AFTER LOOP`);
    console.log(`🚍 Loop #${i}`);
    console.log(`🚒 result`, result);
    console.log(`🛺 result2`, result2);
  } 

  console.log(`\n`);
  console.log(`🚒 final result`, result);
  console.log(`\n`);
  return (result)
};

module.exports = transpose;
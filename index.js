require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  // Step 3: loop through args
  args.forEach(function(userArray) {
    // Step 4: merge with spread
    combinedObject.users = [...combinedObject.users, ...userArray];
  });

  // Step 5: today's date
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 7: return
  return combinedObject;
}

module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
const today = new Date(); //get todays date

exports.getDate = function() {

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);

}


exports.getDay = function() {

  const options = {
    wekday: "long"
  }
  return today.toLocaleDateString("en-US", options);
}

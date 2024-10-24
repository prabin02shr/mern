module.exports = function (user, reqData) {
  if (reqData.username) {
    user.username = reqData.username;
  }
  if (reqData.date_of_birth) {
    user.dob = reqData.date_of_birth;
  }
  if (reqData.gender) {
    user.gender = reqData.gender;
  }
  if (reqData.phone) {
    user.phone = reqData.phone;
  }
  if (!user.address) {
    user.address = {};
  }
  if (reqData.temporary_Address) {
    user.address.temporaryAddress = reqData.temporary_Address;
  }
  if (reqData.permanent_Address) {
    user.address.permanentAddress = reqData.permanent_Address;
  }
  if (reqData.img) {
    user.image = reqData.img;
  }
  return user;
};

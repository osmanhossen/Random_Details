const userFemale = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};
// For Female
const displayUser = (user) => {
  const profile = document.getElementById("profile");
  profile.src = user.results[0].picture.large;
  const name = document.getElementById("name");
  name.innerHTML =
    user.results[0].name.title +
    " " +
    user.results[0].name.first +
    " " +
    user.results[0].name.last;
  const email = document.getElementById("email");
  email.innerHTML = user.results[0].email;
  const number = document.getElementById("number");
  number.innerHTML = user.results[0].phone;
  const gender = document.getElementById("gender");
  gender.innerHTML = user.results[0].gender;
  const location = document.getElementById("location");
  location.innerHTML = user.results[0].location.country;
};

// For Male
const userMale = () => {
  fetch("https://randomuser.me/api/?gender=male")
    .then((res) => res.json())
    .then((data) => displayUser2(data));
};
const displayUser2 = (user) => {
  console.log(user.results[0].gender);
  const mProfile = document.getElementById("M_profile");
  mProfile.src = user.results[0].picture.large;
  const mName = document.getElementById("M_name");
  mName.innerHTML =
    user.results[0].name.title +
    " " +
    user.results[0].name.first +
    " " +
    user.results[0].name.last;
  const mEmail = document.getElementById("M_email");
  mEmail.innerHTML = user.results[0].email;
  const mNumber = document.getElementById("M_number");
  mNumber.innerHTML = user.results[0].phone;
  const mGender = document.getElementById("M_gender");
  mGender.innerHTML = user.results[0].gender;
  const mLocation = document.getElementById("M_location");
  mLocation.innerHTML = user.results[0].location.country;
};

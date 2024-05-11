const url = "http://localhost:3000";
const data = {
  name: "name1",
  course: "course1",
  roll_no: "roll_no1",
};
const customHeaders = {
  "Content-Type": "application/json",
};

fetch(url, {
  method: "POST",
  headers: customHeaders,
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

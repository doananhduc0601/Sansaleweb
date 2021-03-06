export function PostData(type, userData) {
  let BaseURL = "https://localhost:5001/api/Admins/";

  return new Promise((resolve, reject) => {
    fetch(BaseURL + type, {
      method: "POST",
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

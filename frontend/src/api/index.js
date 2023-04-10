import axios from "axios";

export const defaultUrl = 'http://localhost:8000/api/'

export async function getData(url) {
  const res = await fetch(`${defaultUrl}${url}`,{next: {revalidate: 10}});
  if (!res.status===200) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
  
export async function sendMessage(url,data) {
  axios.post(defaultUrl+url, data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
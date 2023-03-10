export const getAllDog = (url)=>{
  return new Promise((resolve,reject)=>{
    fetch(url,{
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'live_SBWSCAetctUkPNxRVb1q9OjxgOGRFBrSKMfsOnhIYzjmfvgACizdeCQv6YM51zJw'
      }
    })
    .then((res)=>res.json())
    .then((data)=>resolve(data));
  });
};
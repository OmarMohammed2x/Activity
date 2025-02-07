fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2025-07-02&end_date=2025-07-09&api_key=PbcCHNTY5pNdiASzfupkHuPSiEJEJ9Q2OKzMEc7M`)
.then(data => data.json())
.then(data =>{
    console.log(data);
    return data;
})
.catch(error => console.log(error));
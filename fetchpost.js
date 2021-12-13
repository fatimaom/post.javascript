const response = await
fetch("http://ec2-34-247-37-135.eu-west-1.compute.amazonaws.com:5000/handle" , {
    method: 'POST' ,
    headers: {
        'Accept': 'application/json',
        'content-Type': 'application/json'
    },
    body: {
"type" : "Single Battery",
"org_id":"rmFT75nxhWsHSkTpo", 
"bem_id":"PyTBT56vqaPt22mZ2",
"email":"fatima.om11@gmail.com" ,
"satrt": "1635778688185",
"end": "1636383488185"
    },
    });
    response.json().then(data => {
        console.log(data);
    });


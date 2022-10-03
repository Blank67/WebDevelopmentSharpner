//AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// GET REQUEST
function getTodos() {
    console.log('GET Request');
    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos', //Demo api data
    //     params: {
    //         _limit:10
    //     }
    // })
    // // .then((res) => {console.log(res);})
    // .then((res) => {showOutput(res);})
    // .catch((err) => {console.log(err);})
    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5') //or .get('https://jsonplaceholder.typicode.com/todos', {params: {_limit: 5}}). Also default for axios is get so we can also remove .get
        .then((res) => {showOutput(res);})
        .catch((err) => {console.log(err);})
  }
  
  // POST REQUEST
  function addTodo() {
    console.log('POST Request');
    axios
        .post('https://jsonplaceholder.typicode.com/todos',{userId: 9898, title: 'New Todo item', completed: false})
        .then((res) => {showOutput(res)})
        .catch((err) => {console.log(err);})
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    console.log('PUT/PATCH Request'); //Put updates whole data with the new data and patch just update the fields we provide rest stays the same. Can check by removing userId
    axios
        .patch('https://jsonplaceholder.typicode.com/todos/1',{title: 'Updated Todo item', completed: true})
        .then((res) => {showOutput(res)})
        .catch((err) => {console.log(err);})
  }
  
  // DELETE REQUEST
  function removeTodo() {
    console.log('DELETE Request');
    axios
        .delete('https://jsonplaceholder.typicode.com/todos/2')
        .then((res) => {showOutput(res)})
        .catch((err) => {console.log(err);})
  }
  
  // SIMULTANEOUS DATA
  function getData() { //get data from multiple apis
    console.log('Simultaneous Request');
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
    ])
        // .then((res) => {
        //     console.log(res[0]);
        //     console.log(res[1]);
        //     showOutput(res[1]);
        // })
        .then(axios.spread((todos,posts) => {
            showOutput(posts);
        }))
        .catch((err) => {console.log(err);})
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config ={
        headers:{
            'Content-Type': 'applicatio.json',
            Authorization: 'sometoken'
        }
    }
    console.log('Custom Headers');
    axios
        .post('https://jsonplaceholder.typicode.com/todos',{userId: 9898, title: 'New Todo item', completed: false}, config)
        .then((res) => {showOutput(res)})
        .catch((err) => {console.log(err);})
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
    const options ={
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'Hello World'
        },
        transformResponse: axios.defaults.transformResponse.concat((data) => {
            data.title = data.title.toUpperCase();
            return data;
        })
    }
    axios(options).then((res) => {showOutput(res)})
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
    axios
        .get('https://jsonplaceholder.typicode.com/todosss?_limit=5',{
            // validateStatus: function(status){
            //     return status<500; //Now it reject only is status is greter or equal to 500
            // }
        })
        .then((res) => {showOutput(res);})
        .catch((err) => {
            if(err.response){
                //Server responded with a status other than 200 range
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }else if(err.request){
                //Request was made but there was no response
                console.log(err.request);
            }else{
                console.log(err.message);
            }
        })
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
    const source = axios.CancelToken.source();
    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5',{cancelToken: source.token})
        .then((res) => {showOutput(res);})
        .catch((thrown) => {
            if(axios.isCancel(thrown)){
                console.log('Request Cancelled',thrown.message);
            }
        })
    if(true){
        source.cancel('Req cancelled.');
    }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  axios.interceptors.request.use((config) => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().toLocaleString()}`);
    return config;
  },(err) => {
    return Promise.reject(err);
  });
  
  // AXIOS INSTANCES
  const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  axiosInstance.get('/comments').then((res) => {showOutput(res)})

  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document.getElementById('transform').addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);
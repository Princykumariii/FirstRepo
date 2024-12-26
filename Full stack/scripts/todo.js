
    addTodoDiv.style.display = "flex";
  
  
  logout()
  logout();
  let loginData = JSON.parse(localStorage.getItem("loginData"));
  
  form.addEventListener("submit", function () {
   {
    dsplayTodos(arr);
  }
  function updateStatusFn(el, i) {
    
    //console.log("before", el)
    let updatedTodo = { ...el, status: !el.status };
    //console.log("after", updatedTodo)
    let todoId = el.id;
    fetch(`${baseUrl}/todos/${todoId}`, {
      method: "PATCH",
  @@ -199,18 +197,28 @@ document
  
      let card = `
      <style>
        h3{
         color: blueviolet;
          font-size: 1.2rem;
        #get_stats_data{
          font-size: 1rem;
          text-align: center;
          display:flex;
          flex-direction:column;
          align-items:start;
          justify-content:center;
          padding-left:5px;
        }
        #get_stats_data>h3{
        margin-bottom:5px;
        color: blueviolet;
        }
         
      </style>
      
      <div>
      <h3> Completed Tasks: ${completedTasks}</h3>
       <h3> Pending Tasks: ${pendingTasks}</h3>
       <h3> High PriorityTasks: ${HighPriorityTasks}</h3>
        <h3>Med Priority Tasks: ${MedPriorityTasks}</h3>
      <div id="get_stats_data">
         <h2> Here is Summary of the Tasks created by <span> ${loginData.username} </span> </h2>
         <h3> Completed Tasks: ${completedTasks}</h3>
         <h3> Pending Tasks: ${pendingTasks}</h3>
         <h3> High PriorityTasks: ${HighPriorityTasks}</h3>
         <h3>Med Priority Tasks: ${MedPriorityTasks}</h3>
         <h3> Low Priority Tasks: ${lowPriorityTasks}</h3>
      </div>`;
      addTodoDiv.style.display = "flex";
  
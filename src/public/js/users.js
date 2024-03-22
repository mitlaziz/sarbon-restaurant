console.log("Users frontend javascript file");

$(function() {
  $(".member-status").on("change", function(e) {
    const id = e.target.id,
      memberStatus = $(`#${id}.member-status`).val();

    //TODO: Axios updateChosenUser done
    axios.post("/admin/user/edit", { 
      _id: id,
      memberStatus: memberStatus,
})
.then((response) => {
    console.log("response:", response);
    const result = response.data; // backenddan yuborilgan object
    console.log("result:", result);

    if(result.data) {
        console.log("user updated!");
        $(".member-status").blur();
    } else alert("User update failed!");
})
.catch((err) => {
    console.log(err);
    alert("User update failed!");
})
  });
});
 //CREATE BURGER 
 $(function() {
     $("#submit").on("click", function(e) {
     e.preventDefault();
 
     // Send the POST request.
     $.ajax("/api/burgers/", {
       type: "POST",
       data: {burger_name:$("[name=burger]").val().trim()}
     }).then(
       function() {
         console.log("making a new burger");
         location.reload();
       }
     );
   });
 
 // EAT BURGER
   $("button").on("click", function() {
     var id = $(this).data("id");
     // Send the PUT request.
     $.ajax("/api/burgers/" + id, {
       type: "PUT",
     }).then(
       function() {
         console.log("eating");
         location.reload();
       }
     );
   });
 });
 
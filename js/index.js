console.log("your index.js file is loaded correct!");


$('#topHeader').on("click", function(){
    console.log("you clicked on the heading");
    $(this).css("color", "#FFA7FB");
  });

  $('.sophieHeader').click(function(){
    $(this).animate({fontSize: "100px" }, 1000 );
    $(this).animate({fontSize: "90px" }, 2000 );
  })
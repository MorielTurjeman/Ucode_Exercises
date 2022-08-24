

  const posts = [
    { name: "Alex", text: "Expensive car" },
    { name: "Byron", text: "New job" },
    { name: "Cassandra", text: "Boyfrind" }
   
  ]

const render=function(){
    $("#bdayPosts").empty()
    for (let post of posts) {
        $("#bdayPosts").append($(`<div class="posts">`).text(`${post.name}: ${post.text}`));
      }

}



  $("button").on("click", function () {

    posts.push({name:$("#name").val(), text: $("#text").val()})
    render()
    
})


render()


1
2
var today = new Date();
var time =  today.getSeconds();
console.log(time)
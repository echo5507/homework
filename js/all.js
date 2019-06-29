
//index首頁項目切換
    $(".rectangle-wrap").click(function(){
        $(this).toggleClass("active").siblings().removeClass("active");
      })
      


//dessert商品切換
    $(".list-group-item").click(function(){
      $(this).toggleClass("active").siblings().removeClass("active");
    })



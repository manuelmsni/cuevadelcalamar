        
        $('g-s-1').click(showGh1); 

        function showGh1()
          {
          $(".g-s-1, .g-hidder-1").fadeIn('slow');
          $(".g-shower-1").css("display", "none");
          }

        $('g-d-1').click(hideGh1); 

        function hideGh1()
          {
          $(".g-shower-1").fadeIn('slow');
          $(".g-s-1, .g-hidder-1").css("display", "none");
          }

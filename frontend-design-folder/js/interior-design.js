document.addEventListener("scroll", function (e) {
    var scrollPosition = document.getElementById('scrollbar_position1')
    var x_range = scrollPosition.getBoundingClientRect().x;
    var y_range = scrollPosition.getBoundingClientRect().y;
    console.log("y_rangeee", y_range);

    var var1 = document.getElementById("scrollbar_position")

    if (y_range > 26) {
      var1.className = "bg-white py-2 md:py-4 sticky top-0 shadow-lg"
    }
    if (y_range > 67) {
      var1.className = "bg-white py-2 md:py-4 sticky top-0"
    }
  })

  var id1 = document.getElementById("id1");
  console.log("id1", id1);
  var id2 = document.getElementById("id2");
  var id3 = document.getElementById("id3");
  var id4 = document.getElementById("id4");

  document.getElementById("id1").addEventListener("click", function (e) {
    // alert("hi");
    id1.className = "p-2 lg:px-4 md:mx-2  text-black rounded  underline  hover:underline underline-offset-8  font-semibold";
    id2.className = "p-2 lg:px-4 md:mx-2  text-black rounded  hover:text-gray-700 transition-colors duration-300 hover:underline underline-offset-8  font-semibold";
    id3.className = "p-2 lg:px-4 md:mx-2  text-black rounded hover:text-gray-700 transition-colors duration-300 hover:underline underline-offset-8  font-semibold ";
    id4.className = "p-2 lg:px-4 md:mx-2  text-black rounded  hover:text-gray-700 transition-colors duration-300 hover:underline underline-offset-8  font-semibold ";
    console.log("id1", id2);

  })

  document.getElementById("id2").addEventListener("click", function (e) {
    id1.className = "p-2 lg:px-4 md:mx-2  text-black rounded no-underline hover:underline  underline-offset-8  font-semibold";
    id2.className = "p-2 lg:px-4 md:mx-2  text-black rounded  hover:text-gray-700 transition-colors duration-300 underline  underline-offset-8 font-semibold";
    id3.className = "p-2 lg:px-4 md:mx-2  text-black rounded  hover:text-gray-700 transition-colors duration-300 hover:underline underline-offset-8  font-semibold no-underline";
    id4.className = "p-2 lg:px-4 md:mx-2  text-black rounded  hover:text-gray-700 transition-colors duration-300 hover:underline underline-offset-8  font-semibold no-underline";
    console.log("id1", id2);

  })

  document.getElementById("id3").addEventListener("click", function (e) {
    id1.className = "p-2 lg:px-4 md:mx-2  text-black rounded no-underline hover:underline  underline-offset-8  font-semibold";
    id2.className = "p-2 lg:px-4 md:mx-2  text-black rounded  hover:text-gray-700 transition-colors duration-300 no-underline hover:underline  underline-offset-8  font-semibold";
    id3.className = "p-2 lg:px-4 md:mx-2  text-black rounded  hover:text-gray-700 transition-colors duration-300 hover:underline underline underline-offset-8  font-semibold";
    id4.className = "p-2 lg:px-4 md:mx-2  text-black rounded  hover:text-gray-700 transition-colors duration-300 hover:underline underline-offset-8  font-semibold no-underline";
    console.log("id1", id2);

  })


  document.getElementById("id4").addEventListener("click", function (e) {
    id1.className = "p-2 lg:px-4 md:mx-2  text-black rounded hover:underline  underline-offset-8 font-semibold";
    id2.className = "p-2 lg:px-4 md:mx-2  text-black rounded  hover:text-gray-700 transition-colors duration-300 hover:underline  underline-offset-8 font-semibold";
    id3.className = "p-2 lg:px-4 md:mx-2  text-black rounded  hover:text-gray-700 transition-colors duration-300 hover:underline  underline-offset-8  font-semibold no-underline";
    id4.className = "p-2 lg:px-4 md:mx-2  text-black rounded  hover:text-gray-700 transition-colors duration-300 underline underline-offset-8  font-semibold";
    console.log("id1", id2);

  })


// tailwind css special config:
tailwind.config = {
    theme: {
      extend: {
        padding: {
          '2': '2px',
          '10': '10px',
          '15': '15px',
          '3': '3px',
          '16': '16px',
          '22': '22px',
          '23': '23px',
          '25': '25px',
          '35': '35px',
          '23': '23px',
          '60': '60px',
          '50': '50px',
          '62': '62px',
          '64': '64px',
          '68': '68px',
          '48': '48px',
          '57': '57px',
          '83': '83px',
          '84': '84px',
          '113': '113px',
          '90': '90px',
          '140': '140px',
          '150': '150px',
          '160': '160px',
          '164': '164px',
          '167': '167px',
          '171': '171px',
          '178': '178px',
          '302': '302px',
          '164': '164px',
          '170': '170px',
          '200': '200px',
          '272': '272px',
          '27': '27px',
          '87': '87px',
          '70': '70px',
          '196': '196px',
          '320': '320px',
          '330': '330px',

        },
        margin: {
          '25': '25px',
          '64': '64px',
          '84': '84px',
          '57': '57px',

        },
        maxWidth: {
          '118': '118px',
          '218': '218px',
          '304': '304px',
          '374': '374px',
          '390': '390px',
        },
        space: {
          '22': '22px',
          '5': '5px',
          '10': '10px',
          '30': '30px',
          '35': '35px',
          '38': '38px',
          '42': '42px',
          '18': '18px',
          '40': '40px',
          '50': '50px',
          '70': '70px',
          '65': '65px',
          '317': '317px',

        },
        width: {
          '120': '120px',
        }
      }
    }
  }

   let current = JSON.parse(localStorage.getItem("ajio_current_item"))
//    console.log("Got Current back",current)

   let image =  document.getElementById("image")
   image.src= current.display_img

 document.getElementById('img0').src= current.images[0]
 document.getElementById('img1').src= current.images[1]
 document.getElementById('name').innerText= current.name
 document.getElementById('price').innerText= "₹"+current.offer_price
 document.getElementById('offerPrice').innerText= "₹"+current.MRP

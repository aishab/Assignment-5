function MenuChoice(){
    if (document.getElementById("menu").value == "Customer List")
    {
        document.getElementById("sec1").style.visibility = "visible";
        document.getElementById("sec2").style.visibility = "hidden";
        document.getElementById("sec3").style.visibility = "hidden";
    }
   else if (document.getElementById("menu").value =="Customers Order History")
   {
    document.getElementById("sec2").style.visibility = "visible";
    document.getElementById("sec1").style.visibility = "hidden";
    document.getElementById("sec3").style.visibility = "hidden";
   }
   
    else if (document.getElementById("menu").value =="List of Orders Placed by Customer")
    {
    document.getElementById("sec3").style.visibility = "visible";
    document.getElementById("sec1").style.visibility = "hidden";
    document.getElementById("sec2").style.visibility = "hidden";
   }

   else
   {
    document.getElementById("sec1").style.visibility = "hidden";
    document.getElementById("sec2").style.visibility = "hidden";
    document.getElementById("sec3").style.visibility = "hidden";
   }
}


function custList() {     //Section 1
    var objRequest = new XMLHttpRequest();  //Create AJAX request object
    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
   // url += document.getElementById("custid").value;
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);
        }
    }
    //Initiate the server request
    
    objRequest.open("GET", url, true);
    objRequest.send();
    }
    function GenerateOutput(result)
    {
        var count = 0;
        var displaytext = "<table><tr><th>Customer ID &nbsp;&nbsp;</th><th>" +
        "Customer Name &nbsp;&nbsp;&nbsp;</th><th>Customer City</th></tr>";
        
        //Loop to extract data from the response object
        for (count = 0; count < result.GetAllCustomersResult.length; count++)
        {
            displaytext += "<tr><td>" + result.GetAllCustomersResult[count].CustomerID + "</td><td>" + result.GetAllCustomersResult[count].CompanyName + "</td><td>"+ result.GetAllCustomersResult[count].City + "</td></tr>";
           
        }
             document.getElementById("orderdisplay").innerHTML = displaytext;
    }  //Section 1 ENDS Here


function GetOrders() {  //Section 2
    var objRequest = new XMLHttpRequest();  //Create AJAX request object
    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    url += document.getElementById("custid").value;
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenOut(output);
        }
    }
    //Initiate the server request
    
    objRequest.open("GET", url, true);
    objRequest.send();
    }
    
    function GenOut(result)
    {
        var count = 0;
        var displaytext = "<table><tr><th>Product Name &nbsp;&nbsp;</th><th> Total Product Quantity Ordered &nbsp;&nbsp;&nbsp;</th><tr>";
        
        //Loop to extract data from the response object
        for (count = 0; count < result.length; count++)
        {
            displaytext += "<tr><td>" + result[count].ProductName + "</td><td>"+ result[count].Total + "</td></tr>";
           
        }
             document.getElementById("order").innerHTML = displaytext;
    }  //Section 2 ENDS here


function Orders() {   //Section 3
    var objRequest = new XMLHttpRequest();  //Create AJAX request object
    //Create URL and Query string
    var url ="http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += document.getElementById("cusid").value;
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenOutput(output);
        }
    }
    //Initiate the server request
    
    objRequest.open("GET", url, true);
    objRequest.send();
    }
    function GenOutput(result)
    {
        var count = 0;
        var displaytext = "<table><tr><th>Order Date </th><th> Order ID </th><th>Shipping Address</th></th>"+
        "Shipping CIty</th><th> Shipping City</th><th>Shipping Name</th><th>Postal Code</th><th>Ship Date</th><tr>";      
        //Loop to extract data from the response object
        for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
        {
            displaytext += "<tr><td>" + result.GetOrdersForCustomerResult[count].OrderDate +
            "</td><td>" + result.GetOrdersForCustomerResult[count].OrderID + "</td><td>"+
            result.GetOrdersForCustomerResult[count].ShipAddress + "</td><td>" +
            result.GetOrdersForCustomerResult[count].ShipCity +"</td><td>" +
            result.GetOrdersForCustomerResult[count].ShipName + "</td><td>" +
            result.GetOrdersForCustomerResult[count].ShipPostcode + "</td><td>" +
            result.GetOrdersForCustomerResult[count].ShippedDate + "</td></tr>";
           
        }
             document.getElementById("display").innerHTML = displaytext;
    }
    
App = {
    
    loading:false,

    render: async () => {
        if(App.loading) {
            return;
        }
        $('#account').html(App.account);
        await App.listMyTenders();
        await App.showAllBids();
        
    },

    listMyTenders: async () => {
        const tenderCount = await App.TenderAuction.tenderCount();
        console.log("My tenders");
        for(i = 1; i <= tenderCount; i++) {
            const tender = await App.TenderAuction.tenders(i);
            if(tender[4] == App.account) {
                const tenderTemplate = `<tr style="text-align:center">
                                            <td>${tender[0]}</td>
                                            <td>${tender[1]}</td>
                                            <td>${tender[2]}</td>
                                            <td>${tender[3]}</td>
                                        </tr>`;
                $("#mytenders").append(tenderTemplate);
            }
        }
    },

    submitTender: async () => {
        App.setLoading(true);
        const itemName = $("#itemName").val();
        const itemDesc = $("#itemDesc").val();
        const itemQuantity = $("#itemQuantity").val();

        try{
            await App.TenderAuction.createTender(itemName, itemDesc, itemQuantity, {from:App.account});
            window.location.reload();
        }catch{
            window.location.reload();
        }
    },

    showAllBids: async () => {
     
        console.log("hello world");
        const bidCount = await App.TenderAuction.bidCount();
        console.log("bid count is : " + App.TenderAuction.bidCount);
        for(i = 1; i <= bidCount; i++) {
            console.log("here 2");
            const tender = await App.TenderAuction.tenders(i);
            const bid = await App.TenderAuction.bids(i);
            console.log("here 3");
           // if(tender[4] == App.account) {
                console.log("55555");             
                const bidTemplate = `<tr style="text-align:center">
                                            <td>${bid[0]}</td>
                                            <td>${tender[1]}</td>
                                            <td>${bid[3]}</td>
                                            <td>${tender[3]}</td>
                                            <td>${tender[2]}</td>
                                            <td>${bid[4]}</td>
                                            <td><button class="w3-button w3-green" style="width:120px; height: 50px;" onclick="App.approveBids();">Accept Bids</button></td>
                                            <td>
                                        </tr>`;
      $("#bidList").append(bidTemplate);
                console.log("ehllo3");
            //}
        }
        
        
 },

 approveBids: async () => {
    var account = null;
    var signature = null;
    var displaysig = null;
    var message = "Bid Details : \n \n #bidlist";
    account = App.account;
    signature = await web3.eth.personal.sign(message, account);
    displaysig = signature.substring(0,50);
    customAlert.alert(" Message signed by \n " + account + " and the Signature is: \n \n \n" + displaysig);
    console.log(signature);
},




 

    

    setLoading: (boolean) => {
        App.loading = boolean;
        const loader = $('#loading');
        const content = $('#content');
        if(boolean) {
            loader.show();
            content.hide();
        }else {
            loader.hide();
            content.show();
        }
    }

}

function uploadTenders() {
    $("#tenderList").hide();
    $("#listAllBids").hide();
    $("#uploadTender").show();
}

function showTenders() {
    $("#listAllBids").hide();
    $("#tenderList").show();
    $("#uploadTender").hide();
    $("#listAllBids").hide();
}

function showAllBids() {
    console.log("#bidlist");
    $("#tenderList").hide();
    $("#uploadTender").hide();
    $("#listAllBids").show();
}

function approveBids(){
    console.log("here is alert");
    
  
}

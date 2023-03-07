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
                console.log(App.account)
                const bidTemplate = `<tr style="text-align:center">
                                            <td>${bid[0]}</td>
                                            <td>${tender[2]}</td>
                                            <td>${bid[3]}</td>
                                            <td>${tender[3]}</td>
                                            <td>${bid[4]}</td>
                                            <td><button onclick=""</button></td>
                                            <td>
                                        </tr>`;
      $("#bidList").append(bidTemplate);
                console.log("ehllo3");
            //}
        }
        
        
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

Images = new Mongo.Collection("images");
console.log(Images.find().count());


if (Meteor.isClient) {
    var img_data = [
    {
        img_src:"img1.jpg",
        img_alt:"drawing of me"
    },
    {
        img_src:"img2.jpg",
        img_alt:"pent house selfie"
    },
    {
        img_src:"img3.jpg",
        img_alt:"car selfie"
    },

  ];

    Template.images.helpers({images:img_data});

    // Template.images.helpers({images:Images.find()});


    Template.images.events({
       'click .js-image' :function(event){
           $(event.target).css("width", "50px");
       }
    });

}



if (Meteor.isServer) {
    console.log("client")
}

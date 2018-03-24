var Track = function(trackName, trackDescription, trackContent) {
  this.trackName = trackName;
  this.trackDescription = trackDescription;
  // this.trackContent will hold all of our Track videos
  this.trackContent = [];

  this.addTrackContent = function(stretchVid, cardioVid, workoutVid, nutritionVid){
    this.trackContent.push(new TrackVids(stretchVid, cardioVid, workoutVid, nutritionVid));
  };
};

var TrackVids = function(stretchVid, cardioVid, workoutVid, nutritionVid) {
  this.stretchVid = stretchVid;
  this.cardioVid = cardioVid;
  this.workoutVid = workoutVid;
  this.nutritionVid = nutritionVid;
};

//////////Assassin Track
//=========================
var assassin = new Track("Assasin", "You're versatile, cunning, and willing to take calculated risks. This track is perfect for the casual character who understands the link between mind and body.")

assassin.addTrackContent("https://www.youtube.com/watch?v=VxBAlya7npk", "https://www.youtube.com/watch?v=86QRDjbrbdk", "https://www.youtube.com/watch?v=J4LJxvjq3BY", "https://www.youtube.com/watch?v=rO0Q9f4aYms");

//////////Hunter Track
//=========================
var hunter = new Track("Hunter", "Nimbleness, with a lean physique. You love the rush of the chase, and you understand the importance of instinct and calcution.")

hunter.addTrackContent("https://www.youtube.com/watch?v=kKeBjBBUQyY", "https://www.youtube.com/watch?v=6wTylMnX7_k", "https://www.youtube.com/watch?v=YJ3QuchrUNA", "https://www.youtube.com/watch?v=frEU93hI6co");

//////////Titan Track
//=========================
var titan = new Track("Titan", "Much like a giant in appearance. You are powerful and sturdy, and your physical achievemnts cannot be ignored.")

titan.addTrackContent("https://www.youtube.com/watch?v=RVq0X3XnKmE", "https://www.youtube.com/watch?v=qzymPet0Fl4", "https://www.youtube.com/watch?v=H_gU_cgyWt8", "https://www.youtube.com/watch?v=xxP5qb89prg");





  //
  // $(function() {
  //
  //   $(".get-assassin").on("click", function(event) {
  //     console.log(assassin);
  //   })
  //
  // });


$(document).ready(function() {



});

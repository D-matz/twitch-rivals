var t1 = ["1adrianaries1", "hyamilol", "shiphtur", "seanic", "starsmitten"];
var t2 = ["tonytoplol", "nightblue3", "strompest", "bukzachv2", "gweiss96"];
var t3 = ["boxbox", "king_nidhogg", "pekinwoof", "xfsn_saber", "joeyyylol"];
var t4 = ["generalsniperna", "loltyler1", "alwaysplanahealol", "duoking1", "tarzaned"];
var t5 = ["nintendudex", "forestwithin", "tsmsword", "andybendylol", "lohpally"];
var t6 = ["mistystumpey", "mikeyeung", "yassuo", "value247", "julienlol"];
var t7 = ["dragoonl0l", "metaphor", "quantum", "ino1lol", "nasteeylol"];
var t8 = ["tfblade", "warmachinehyper", "repobah", "wayofthetempest", "osama"];
var teamlist = [t1, t2, t3, t4, t5, t6, t7, t8]
var teamdict = {};
namelist = ["Shiphtur", "Nightblue3", "boxbox", "loltyler1", "Lohpally", "Yassuo", "Metaphor", "TFBlade"]
for(var i=0;i<8;i++)
{
 teamdict[namelist[i]] = i;
}

  //how to get argument here lol
function changeteam1() {
  var team = document.getElementById("team1").value;
  var teamnum = teamdict[team];
  var players = teamlist[teamnum]
  document.getElementById("a1").src = "https://www.twitch.tv/embed/"+players[0]+"/chat?parent=d-matz.github.io";
  document.getElementById("a2").src = "https://www.twitch.tv/embed/"+players[1]+"/chat?parent=d-matz.github.io";
  document.getElementById("a3").src = "https://www.twitch.tv/embed/"+players[2]+"/chat?parent=d-matz.github.io";
  document.getElementById("a4").src = "https://www.twitch.tv/embed/"+players[3]+"/chat?parent=d-matz.github.io";
  document.getElementById("a5").src = "https://www.twitch.tv/embed/"+players[4]+"/chat?parent=d-matz.github.io";
  var names = "";
  for(var i=0;i<4;i++)
  {
    names = names + players[i]+ ", ";
  }
  names = names + players[4]
  document.getElementById("text1").src = names;
}

function changeteam2() {
  var team = document.getElementById("team2").value;
  var teamnum = teamdict[team];
  var players = teamlist[teamnum]
  document.getElementById("b1").src = "https://www.twitch.tv/embed/"+players[0]+"/chat?parent=d-matz.github.io";
  document.getElementById("b2").src = "https://www.twitch.tv/embed/"+players[1]+"/chat?parent=d-matz.github.io";
  document.getElementById("b3").src = "https://www.twitch.tv/embed/"+players[2]+"/chat?parent=d-matz.github.io";
  document.getElementById("b4").src = "https://www.twitch.tv/embed/"+players[3]+"/chat?parent=d-matz.github.io";
  document.getElementById("b5").src = "https://www.twitch.tv/embed/"+players[4]+"/chat?parent=d-matz.github.io";
  var names = "";
  for(var i=0;i<4;i++)
  {
    names = names + players[i]+ ", ";
  }
  names = names + players[4]
  document.getElementById("text2").src = names;
}

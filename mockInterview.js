// playlist = [“song a”, “song b”, “song c”, “song d”, “song e”]
// cooldown = 2

// play 1: “song c”

// play 2: “song a”

// play 3: “song e”

// play 4: “song d”

Class PlaylistShuffler {
	constructor(String[] songs, int cooldown) {
	}

	String getNextSong() {
	}
}

function getNextSong(songs, coolDown){
let recents = [ ];
let randomCount = Math.random();
if(recents.length < coolDown && !recents.includes(songs[randomCount])){
           recents.push(songs[randomCount]);
	return songs[randomCount];
}
if(recents.length < coolDown && recents.includes(songs[randomCount])){
     let currentIndex = recents.indexOf(songs[randomCount])
     	if(currentIndex === 0){
		recents.pop();
		getNextSong(songs,coolDown);
}else{
	getNextSong(songs,coolDown);

}
}
if(recents.length>coolDown){
	recents.pop();
}
}

const moodBtn = document.querySelectorAll('button[data-mood]');
const songBox = document.getElementById('songDiv');
const songCard = document.getElementById('song_card');

const moodData = {

    happy: {
        color: '#FFE066',
        song: `<iframe width="70%" height="800" src="https://www.youtube.com/embed/yKNxeF4KMsY" title="Coldplay - Yellow (Official Video)" allowfullscreen></iframe>`,
    },

    sad: {
        color: '#A0C4FF',
        song: `<audio width="70%" height="800" src="https://www.youtube.com/embed/dioKyJt5-PE" title="Heer toh badi sad - Tamasha" allowfullscreen></audio>`,
    },

    angry: {
        color: '#FF6B6B',
        song: `<audio width="70%" height="800" src="https://www.youtube.com/embed/Sl6en1NPTYM" title="I Can Do It with a Broken Heart (TTPD) - Taylor Swift" allowfullscreen></audio>`,
    },

    calm: {
        color: `#B7F0AD`,
        song: `<audio width="70%" height="800" src="https://www.youtube.com/embed/o0DoTL54DXo" title="I Don’t Care - Ed Sheeran & Justin Bieber"  allowfullscreen></audio>`,
    }

};

moodBtn.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.dataset.mood;
        const moodInfo = moodData[mood];
        document.body.style.background = moodInfo.color;
        songCard.innerHTML = moodInfo.song;
        songBox.classList.remove('song_div');

        

    });

});


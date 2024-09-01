function featuredVideos(videos) {
    videos = videos || [];

    let selected = Math.floor(videos.length / 2);

    let container = document.getElementById('gallery');
    let back = document.getElementById('gallery-back');
    let forward = document.getElementById('gallery-forward');

    let element = videoId => {
        let video = document.createElement('div');
        video.className = 'video-overview';
        video.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        return video;
    };

    let elements = videos.map(video => element(video));

    for(let i = 0; i < elements.length; i++) {
        let element = elements[i];
        
        let left = 50 + (75 * (i - selected));
        element.style.left = `${left}%`;

        if(i !== selected) {
            element.style.opacity = 0.5;
        }

        container.appendChild(element);
    }

    back.onclick = () => {
        selected = (selected - 1 + videos.length) % videos.length;
        for(let i = 0; i < elements.length; i++) {
            let element = elements[i];
            
            let left = 50 + (75 * (i - selected));
            element.style.left = `${left}%`;

            if(i !== selected) {
                element.style.opacity = 0.5;
            } else {
                element.style.opacity = 1;
            }
        }
    };

    forward.onclick = () => {
        selected = (selected + 1) % videos.length;
        for(let i = 0; i < elements.length; i++) {
            let element = elements[i];
            
            let left = 50 + (75 * (i - selected));
            element.style.left = `${left}%`;

            if(i !== selected) {
                element.style.opacity = 0.5;
            } else {
                element.style.opacity = 1;
            }
        }
    }
}
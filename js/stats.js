fetch('/stats').then(x => x.json()).then(stats => {
    document.getElementById('users').innerText = stats.users.toLocaleString('en-US');
    document.getElementById('dlcLaunches').innerText = stats.launches.toLocaleString('en-US');
    document.getElementById('onlineUsers').innerText = stats.online.toLocaleString('en-US');
    document.getElementById('daysSinceRelease').innerText = stats.daysSinceRelease.toLocaleString('en-US');
    document.getElementById('unpatched').innerText = stats.daysSinceLastUnpatch.toLocaleString('en-US');

    featuredVideos(stats.featuredVideos);
});
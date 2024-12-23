export default function Music(){
    return <div className=" w-full flex flex-col gap-2">
        <h3>Spotify</h3>
        <iframe className="bg-transparent rounded-xl" src="https://open.spotify.com/embed/track/1hfK5ceTZYt9sG2TjWEZ4I?utm_source=generator" width="100%" height="152px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <h3>SoundCloud</h3>
        <iframe className="bg-transparent rounded-xl" width="100%" height="600" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1643555917&color=%23ad38f5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    </div>
}
Music App - REST API Documentation


GET /album/:id                 Show detail for album with ID = :id
GET /album/song/:id            Show detail for song with ID = :id
GET /album/song/musician/:id   Show detail for musician with ID = :id
GET /album/song/musician/writer/:id show detail for writer with ID = :id


POST /album/{album_id}          Add new album with album name = {album_id}
POST /album/song/{song_id}      Add new song with song name = {song_id} 
POST /album/song/musician/{musician_id}   Add new musician with artist name = {musician_id}
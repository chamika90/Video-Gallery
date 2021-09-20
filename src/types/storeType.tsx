export interface IMusicVideoList {
  genres: IGenre[] | undefined;
  videos: IMusicVideo[] | undefined;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IMusicVideo {
  id: number;
  artist: string;
  title: string;
  release_year: number;
  genre_id: number;
  image_url: string;
}

interface storeType {
  videoList: IMusicVideoList;
}

export default storeType;

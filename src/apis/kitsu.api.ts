import wretch from 'wretch';

const api = wretch()
  .url('https://kitsu.io/api/edge')
  .headers({
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json',
  });

export const getLatestAnimes = async () => {
  let output = [];
  const res = await api
    .url('/anime')
    .get()
    .json();

  if (res) {
    output = res.data.map(item => {
      return {
        id: item.id,
        title:
          item.attributes &&
          item.attributes.titles &&
          item.attributes.titles.en,
        cover:
          item.attributes &&
          item.attributes.posterImage &&
          item.attributes.posterImage.original,
        synopsis: item.attributes && item.attributes.synopsis,
      };
    });
  }

  return output;
};

export const getLatestAnimesAlt = async () => {
  let output = [];
  const res = await api
    .url('/trending/anime')
    .get()
    .json();

  if (res) {
    output = res.data.map(item => {
      return {
        id: item.id,
        title:
          item.attributes &&
          item.attributes.titles &&
          item.attributes.titles.en,
        poster:
          item.attributes &&
          item.attributes.posterImage &&
          item.attributes.posterImage.original,
        cover:
          item.attributes &&
          item.attributes.coverImage &&
          item.attributes.coverImage.original,
        synopsis: item.attributes && item.attributes.synopsis,
      };
    });
  }

  return output;
};

export const getEpisodesOfAnime = async animeId => {
  let output = [];
  const res = await api
    .url(`/anime/${animeId}/episodes`)
    .get()
    .json();

  if (res) {
    output = res.data.map(item => {
      return {
        id: item.id,
        title: item.attributes && item.attributes.canonicalTitle,
        cover:
          item.attributes &&
          item.attributes.thumbnail &&
          item.attributes.thumbnail.original,
        synopsis: item.attributes && item.attributes.synopsis,
      };
    });
  }

  return output;
};

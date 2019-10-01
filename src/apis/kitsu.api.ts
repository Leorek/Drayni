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
      };
    });
  }

  return output;
};

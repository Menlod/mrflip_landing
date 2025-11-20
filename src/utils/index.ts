export const parseCianFlatUrl = (url: string) => {
  const regex = /^https:\/\/www\.cian\.ru\/sale\/flat\/(\d+)\/?$/;
  console.log("url", url);
  const match = url.match(regex);

  if (match) {
    const cian_id = Number(match[1]);
    return cian_id;
  }

  return null;
};

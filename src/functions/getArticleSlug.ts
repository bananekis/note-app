type Location = {
  hash: string;
  key?: string | undefined;
  pathname: string;
  search: string;
  state: any;
};

export const getArticleSlug = (location: Location, index: number) => {
  return location.pathname.split("/")[index];
};

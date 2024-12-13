export const replaceSeoRM = (input: string) => {
  input = input.replace(
    `link rel="canonical" href="https://nologin.tnut.vn/`,
    `link rel="canonical" href="https://tnut.vn/`
  );
  input = input.replace(
    `meta property="og:url" content="https://nologin.tnut.vn`,
    `meta property="og:url" content="https://tnut.vn`
  );

  input = input.replace(
    `"@id":"https://nologin.tnut.vn/#organization"`,
    `"@id":"https://tnut.vn/#organization"`
  );
  input = input.replace(
    `https://nologin.tnut.vn/#logo`,
    `https://tnut.vn/#logo`
  );
  input = input.replace(
    `https://nologin.tnut.vn/#website`,
    `https://tnut.vn/#website`
  );
  input = input.replace(
    `https://nologin.tnut.vn/#webpage`,
    `https://tnut.vn/#webpage`
  );
  input = input.replace(
    `"url":"https://nologin.tnut.vn"`,
    `"url":"https://tnut.vn"`
  );

  input = input.replace(
    `"@type":"WebPage","@id":"https://nologin.tnut.vn`,
    `"@type":"WebPage","@id":"https://tnut.vn`
  );

  input = input.replace(
    `#webpage","url":"https://nologin.tnut.vn`,
    `#webpage","url":"https://tnut.vn`
  );

  input = input.replace(
    `"mainEntityOfPage":{"@id":"https://nologin.tnut.vn/`,
    `"mainEntityOfPage":{"@id":"https://tnut.vn/`
  );
  input = input.replace(
    `"worksFor":{"@id":"https://nologin.tnut.vn/#organization`,
    `"worksFor":{"@id":"https://tnut.vn/#organization`
  );

  input = input.replace(
    `"sameAs":["https://nologin.tnut.vn"]`,
    `"sameAs":["https://tnut.vn"]`
  );

  input = input.replace("noindex", "index");
  input = input.replace("nofollow", "follow");
  return input;
};
